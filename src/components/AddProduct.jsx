import React, { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleProductSubmit = (e) => {
        e.preventDefault()
        const singleProduct = {name,price,description,image}
        console.log(singleProduct)
    }
    return (
        <> 
            <form onSubmit={handleProductSubmit} >
                <label htmlFor="">Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter your product name' /> <br />
                <label htmlFor="">Price</label>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} placeholder='Enter your product price' /> <br />
                <label htmlFor="">Description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder='Enter your product description' /> <br />
                <label htmlFor="">Image</label>
                <input type="url" onChange={(e)=>setImage(e.target.value)} placeholder='Enter your product image' /> <br />
                <button>Submit</button>
            </form> 
        </>
    )
}

export default AddProduct