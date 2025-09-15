import { useGetPostsQuery } from "./scripts/api/root"
import styles from './styles/App.module.css'
import Header from "./components/header/Header"
import ListNews from "./components/listNews/ListNews"
import { useEffect, useState } from "react"
import type { NYTArticle } from "./scripts/types/news.type"
import Footer from "./components/footer/Footer"
import MobileSidebar from "./components/mobileSidebar/MobileSidebar"

function App() {
  const [visibleSidebar, setVisibleSidebar] = useState(false)
  const [news, setNews] = useState<NYTArticle[]>([])
  const {data} = useGetPostsQuery()
  
  useEffect(() => {
    if (data) setNews(data.response.docs)
  }, [data])

 
  return (
    <div className={styles.wrapper}>
      <Header setVisibleSidebar={setVisibleSidebar}/>
      <MobileSidebar
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar} 
      />
      <ListNews data={news} />
      <Footer />
    </div>
  )
}

export default App
