import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { NYTRequest } from '../types/news.type'

interface GetPosts {
  year: number
  month: number
}

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/nyt', // proxy путь
  }),
  endpoints: (build) => ({
    getPosts: build.query<NYTRequest, GetPosts>({
      query: (body: GetPosts) => ({
        url: `/${body.year}/${body.month}.json`, 
        params: { 'api-key': import.meta.env.VITE_API_TOKEN },
      }),
    }),
  }),
})

export const { useGetPostsQuery, useLazyGetPostsQuery } = rootApi
