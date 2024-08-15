import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import { useGetAllPostsQuery } from './store/api/post.api'
import { IPost } from './types'
import LastNewPost from './components/lastNewPost/LastNewPost'

const App = () => {
  const {data, isLoading} = useGetAllPostsQuery(null)
  const [newPosts, setNewPosts] = useState<IPost[]>([])
  const [lastNewPost, setLastNewPost] = useState<IPost>()

  
  useEffect(() => {
    if(data) {
      setNewPosts(data.articles)
      setLastNewPost(data.articles[0])
    }
  }, [data])

  return (
    <div>
      <Header />
      <div className='max-w-[1300px] mx-auto px-[15px]'>
        {
          lastNewPost && <LastNewPost lastNewPost={lastNewPost} />
        }
      </div>
    </div>
  )
}

export default App