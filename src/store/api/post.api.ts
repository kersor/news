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
                url: '/top-headlines',
                params: {
                    'apiKey': process.env.REACT_APP_API_KEY,
                    'country': 'ru'
                }
            })
        })
    })
})

export const {useGetAllPostsQuery} = postNews