import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    // get all products 
    getCategoy: builder.query({ query: () => `products/categories` }), 

  }),
})

export const { useGetCategoyQuery,  } = categoryApi