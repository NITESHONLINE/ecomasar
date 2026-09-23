import React from 'react'
import { useParams } from 'react-router'
import AddProduct from '../components/AddProduct'

const EditProduct = () => {
    const {id} = useParams();

    const products = JSON.parse(localStorage.getItem('product'));
    const product = products[id];

    console.log(product)

  return (
    <>

    <AddProduct
        editData = {product}
        editIndex = {id}
        isEdit={true}
    />

    </>
  )
}

export default EditProduct