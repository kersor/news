import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetAllPosts } from '../../types'

export const postNews = createApi({
    reducerPath: 'postNews',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query<IGetAllPosts, null> ({
            query: () => ({
                url: '/everything',
                params: {
                    'apiKey': process.env.REACT_APP_API_KEY,
                    'q': 'technology',
                    'language': 'ru',
                    'pageSize': 5,
                    'sortBy': 'publishedAt'
                }
            })
        })
    })
})

export const {useGetAllPostsQuery} = postNews