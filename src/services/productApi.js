import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    // get all products 
    getProducts: builder.query({ query: () => `products` }),

    // single product 
    getProductsById: builder.query({ query: (id) => `products/${id}` }),
    
    // create product 
    addProduct: builder.mutation({ query: (formData) => ({
      url:`products/add`,
      method: 'POST',
      body:formData
    }) }),

  }),
})

export const { useGetProductsQuery, useGetProductsByIdQuery, useAddProductMutation } = productApi