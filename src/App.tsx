import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import { useGetAllPostsQuery } from './store/api/post.api'
import { IPost } from './types'



const App = () => {
  const {data} = useGetAllPostsQuery(null)
  const [lastNewPosts, setLastNewPosts] = useState<IPost[]>([])

  useEffect(() => {
    if(data) setLastNewPosts(data.articles)
  }, [])

  console.log(data)

  return (
    <div>
      <Header />
    </div>
  )
}

export default App