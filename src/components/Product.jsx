import React from 'react'

const Product = ({productdata}) => {

    // console.log(props)
  return (
    <>
   {productdata?.map((data) => (
          <div className='border border-gray-200 rounded p-4'>
            <img src={data?.image} alt="" />
            <h2>{data?.name}</h2>
            <p>{data?.description}</p>
            <span>{data?.price}</span>\
          </div>
        ))}


    </>
  )
}

export default Product