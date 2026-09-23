import React, { useState } from 'react'
import AddProduct from '../components/AddProduct'
import Product from '../components/Product'
import { Link } from 'react-router'

const Home = () => {


    const initialProducts = [
        {
            name: "Apple",
            price: 300,
            description: "Best apple in Nepal",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGUJvBVVX6SjlOM7qVU56vxynAuxuUQS_F3yzIl5qKQ&s=10"
        },
        {
            name: "Banana",
            price: 300,
            description: "Best Banana in Nepal",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZmgee3aA-Twm_HNn1miNiXLjVH0qgQ1q-n6BTsEVgzNsKQQPsPTW9QwmyXeH5tpDlm_NcS2s32EZo56NSWntM8acVip6WFz0VeuHW3M7PA&s=10"
        },
        {
            name: "Graps",
            price: 300,
            description: "Best Graps in Nepal",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwCwTsn7o3jtvOsENpifd4dFm_pqBRsPlb1tC8mfoo29feLorVDkoeQPexbF4hzHW6FdyLmZ5B2JIf1WejC-phKgmNFJFSWVP2tzWYg3cTw&s=10"
        },
        {
            name: "Guava",
            price: 300,
            description: "Best Guava in Nepal",
            image: "data:image/jpeg;base64,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"
        },
        {
            name: "Orange",
            price: 300,
            description: "Best Orange in Nepal",
            image: "data:image/jpeg;base64,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"
        },

    ]


    const [product, setProduct] = useState(()=> {
         const dataFromLocalStorage = JSON.parse(localStorage.getItem('product'))
         return dataFromLocalStorage ? dataFromLocalStorage : initialProducts
    })

   

    const handleAddProduct = (singleProduct) => {
        // alert('parent to child')
        const updatedData = [singleProduct, ...product]
        console.log("single product data from child", singleProduct)
        console.log("updated datda", updatedData)
        setProduct(updatedData)
        localStorage.setItem("product", JSON.stringify(product))
    }

    const handleAllProductDelete = () => {
        localStorage.clear();
        location.reload()
    }


    const handleDeleteProduct = (i) => {
        const allProduct = JSON.parse(localStorage.getItem('product'))

        allProduct.splice(i, 1)
        localStorage.setItem('product', JSON.stringify(allProduct))

        setProduct(allProduct)
        alert("Product deleted success.")
        location.reload()

    }



    return (
        <>
            <AddProduct addproduct={handleAddProduct} />
            <button className='bg-red-600 text-white ml-6 rounded py-2 px-3' onClick={handleAllProductDelete}>Delet all product</button>
            <Product productdata={product} />

            <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-md text-center">
                        <h2 class="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
                    </div>

                    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
                        {product?.map((data, i) => (
                            <article class="relative flex flex-col overflow-hidden rounded-lg border">
                                <div class="aspect-square overflow-hidden">
                                    <Link to={`/product/${i}`}>
                                        <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={data?.image} alt="" />
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
                                    <h3 class="mb-2 text-sm text-gray-400">{data?.name}</h3>
                                </div>

                                <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
                                    <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
                                </button>
                                <button onClick={() => handleDeleteProduct(i)} className='my-4 bg-red-500 w-[100px] text-white rounded py-2 ml-6'>Delete</button>
                                    <Link to={`/edit/${i}`}>Edit</Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home