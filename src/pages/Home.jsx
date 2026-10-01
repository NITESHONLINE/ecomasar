import React, { useState } from 'react'
import AddProduct from '../components/AddProduct'
import Product from '../components/Product'
import { Link, useLocation, useNavigate, useParams } from 'react-router'
import { useGetProductsByCategoryQuery, useGetProductsBySearchQuery, useGetProductsQuery } from '../services/productApi'
import { useGetCategoyQuery } from '../services/categoryApi'

const Home = () => {

    const { data } = useGetProductsQuery()
    const { data: category } = useGetCategoyQuery()

    const { cat } = useParams();
    const { data: categoryProduct } = useGetProductsByCategoryQuery(cat)
    const nav = useNavigate();
    const {search} = useLocation()

    const {data:searchData} = useGetProductsBySearchQuery(search)


    console.log("search", search) 

    console.log(searchData)


    let productData;
    if(cat && categoryProduct){
        productData = categoryProduct
    } else if(search && searchData){
        productData = searchData
    } else{
        productData = data
    }




    return (
        <>
            <AddProduct />

            <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-md text-center">
                        <h2 class="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
                    </div>

                    {/* category filter  */}
                    <select onChange={(e) => nav('/' + e.target.value)} name="" id="">
                        {category?.map((data) => (
                            <option value={data?.slug}>{data?.name}</option>
                        ))}
                    </select>

                        {/* search filter  */}
                    <form
                        
                    class="max-w-md mx-auto">
                        <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                            </div>
                            <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                            <button type="button" class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
                        </div>
                    </form>


                    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
                        {productData?.products?.map((data, i) => (
                            <article class="relative flex flex-col overflow-hidden rounded-lg border">
                                <div class="aspect-square overflow-hidden">
                                    <Link to={`/product/${i}`}>
                                        <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={data?.images[0]} alt="" />
                                    </Link>
                                </div>
                                <div class="absolute top-0 m-2 rounded-full bg-white">
                                    <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                                </div>
                                <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                    <div class="mb-2 flex">
                                        <p class="mr-3 text-sm font-semibold">${data?.price}</p>
                                        <p class="text-xs text-gray-400"> {data?.description}</p>
                                    </div>
                                    <h3 class="mb-2 text-sm text-gray-400">{data?.title}</h3>
                                </div>

                                <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
                                    <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
                                </button>
                                {/* <button onClick={() => handleDeleteProduct(i)} className='my-4 bg-red-500 w-[100px] text-white rounded py-2 ml-6'>Delete</button>
                                <Link to={`/edit/${i}`}>Edit</Link> */}
                            </article>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home