import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { NYTArticle, NYTRequest } from '../types/news.type'

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/nyt/svc/archive/v1', // proxy путь
  }),
  endpoints: (build) => ({
    getPosts: build.query<NYTRequest, void>({
      query: () => ({
        url: `/2025/5.json`, // обязательно прошлый месяц для работы
        params: { 'api-key': import.meta.env.VITE_API_TOKEN },
      }),
    }),
  }),
})

export const { useGetPostsQuery } = rootApi
