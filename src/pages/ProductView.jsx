import React from 'react'
import { useParams } from 'react-router'

const ProductView = () => {
    const { id } = useParams()

    const product = JSON.parse(localStorage.getItem('product'))

    const singleData = product[id]

    console.log("all data:", product)
    console.log("single data:", singleData)

    return (
        <>
            <h1 className='text-center text-3xl'>ProductView</h1>
            <section className='flex justify-center'>
                <div className='flex border border-gray-400 rounded p-4'>
                    <div>
                        <h2>{singleData?.name}</h2>
                        <p>{singleData?.description}</p>
                        <h3>{singleData?.price}</h3>
                    </div>
                    <img src={singleData?.image} alt="" />
                </div>

            </section>



        </>
    )
}

export default ProductView