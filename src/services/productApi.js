import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    // get all products 
    getProducts: builder.query({ query: ({page=1, limit=10}) =>{
      const skip = (page - 1) * limit;
      return `products/?limit${limit}&skip=${skip}`
    }}),

    //search produts
    getProductsBySearch: builder.query({ query: (search) => `/products/search${search}` }),

    // single product 
    getProductsById: builder.query({ query: (id) => `products/${id}` }),
    
    // create product 
    addProduct: builder.mutation({ query: (formData) => ({
      url:`products/add`,
      method: 'POST',
      body:formData
    }) }),

    // get products by category 
    getProductsByCategory: builder.query({ query: (cat) =>
       `products/category/${cat}` 
      }),


  }),
})

export const { useGetProductsQuery, useGetProductsBySearchQuery, useGetProductsByIdQuery, useAddProductMutation, useGetProductsByCategoryQuery } = productApi