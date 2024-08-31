import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import { useGetAllPostsQuery } from './store/api/post.api'
import { IPost } from './types'
import LastNewOnePost from './components/lastNewOnePost/LastNewOnePost'
import LastNewMorePost from './components/lastNewMorePosts/LastNewMorePosts'

const App = () => {
  const {data, isLoading} = useGetAllPostsQuery(null)
  const [lstNewMorePost, setLstNewMorePost] = useState<IPost[]>([])
  const [lstNewOnePost, setLstNewOnePost] = useState<IPost>()

  
  useEffect(() => {
    if(data) {
      setLstNewMorePost(data.articles.filter((item, index) => index !== 0) )
      setLstNewOnePost(data.articles[0])
    }
  }, [data])

  return (
    <div>
      <Header />
      <div className='max-w-[1300px] mx-auto px-[15px]'>
        {
          lstNewOnePost && <LastNewOnePost lstNewOnePost={lstNewOnePost}/>
        }
      </div>
      <div className='max-w-[1300px] mx-auto px-[15px] mt-[70px]'>
        <div className='flex justify-between items-center'>
            <h2 className='text-[25px] font-bold uppercase max-[600px]:text-[18px] max-[400px]:text-[14px]'>Последние новости</h2>
            <span className='text-[#e35b5a] text-[14px] font-bold max-[600px]:text-[12px]'>Смотреть все</span>
        </div>
        {
          lstNewMorePost && <LastNewMorePost lstNewMorePost={lstNewMorePost} />
        }
      </div>
    </div>
  )
}

export default App