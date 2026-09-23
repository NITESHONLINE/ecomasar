import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const AddProduct = ({ addproduct, editData, editIndex, isEdit=false }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const nav = useNavigate()

    console.log(editData)

    useEffect( ()=> {
        if(isEdit && editData){
            setName(editData.name);
            setPrice(editData.price);
            setDescription(editData.description);
            setImage(editData.image);
        }
    },[editData,isEdit])    

    const handleProductSubmit = (e) => {
        e.preventDefault()
        const singleProduct = { name, price, description, image }

        if(isEdit){
            const products = JSON.parse(localStorage.getItem('product'));
            products[editIndex] = singleProduct
            localStorage.setItem('product', JSON.stringify(products))
            alert('product upated success')
            nav('/')
        } else{
            addproduct(singleProduct)
            setName('')
            setPrice('')
            setDescription('')
            setImage('')
        }

    }
    return (
        <>  
            <section class="">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Add your product
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={handleProductSubmit}>
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" />
                                </div> 
                                <div>
                                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
                                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   required="" />
                                </div> 
                                <div>
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   required="" />
                                </div> 
                                <div>
                                    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image</label>
                                    <input type="url" value={image} onChange={(e) => setImage(e.target.value)} name="image" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   required="" />
                                </div>   
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="w-full border hover:cursor-pointer text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default AddProduct