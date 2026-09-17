import React from 'react'
import { Link } from 'react-router'

const Product = ({ productdata }) => {

  // console.log(props)
  return (
    <>
      {productdata?.map((data, i) => (
        <div className='border border-gray-200 rounded p-4'>
          <Link to={`/product/${i}`}>
            <img src={data?.image} alt="" />
          </Link>
          <h2>{data?.name}</h2>
          <p>{data?.description}</p>
          <span>{data?.price}</span>
        </div>
      ))}


    </>
  )
}

export default Product