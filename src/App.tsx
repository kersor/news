import { useGetPostsQuery, useLazyGetPostsQuery } from "./scripts/api/root"
import styles from './styles/App.module.css'
import Header from "./components/header/Header"
import ListNews from "./components/listNews/ListNews"
import { useEffect, useRef, useState } from "react"
import type { NYTArticle } from "./scripts/types/news.type"
import Footer from "./components/footer/Footer"
import MobileSidebar from "./components/mobileSidebar/MobileSidebar"

const year = 2025
const month = 5

function App() {
  const firstIdRef = useRef("")
  const [firstId, setFirstId] = useState("")
  const [params, setParams] = useState({
    year,
    month
  })


  const [getPosts] = useLazyGetPostsQuery()
  const [visibleSidebar, setVisibleSidebar] = useState(false)
  const [news, setNews] = useState<NYTArticle[]>([])
  const {data} = useGetPostsQuery(params)

  useEffect(() => {
    if (data) {
      const fn = data.response.docs.slice(0, 20)
      if (!fn.length) return

      if (firstIdRef.current === "") {
        const candidate_id = fn[0]._id
        setFirstId(candidate_id)
        firstIdRef.current = candidate_id
      }
      setNews(prev => [...prev, ...fn])
    }
  }, [data])

  useEffect(() => {
    const interval = setInterval(async () => {
      const posts = await getPosts({ year, month })
      if (!posts.error) {

        const candidate = posts.data?.response.docs[0]
        if (!candidate) return

        const candidate_id = candidate._id
        if (candidate_id === firstIdRef.current) return 

        setNews(prev => [candidate, ...prev])
        firstIdRef.current = candidate_id
        setFirstId(candidate_id)
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [getPosts])

 
  return (
    <div className={styles.wrapper}>
      <Header setVisibleSidebar={setVisibleSidebar}/>
      <MobileSidebar
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar} 
      />
      <ListNews data={news} setParams={setParams} params={params} />
      <Footer />
    </div>
  )
}

export default App
