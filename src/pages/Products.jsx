/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/Pagination'

function Products({allProducts, setAllProducts  }) {

    const [productsList, setProductsList] = useState([])
    const totalProduct = productsList.length

    const [productsPage, setProductPage ] = useState(6)
    const [currentPage, setCurrentPage ] = useState(1);


    const lastIndex = currentPage * productsPage
    const firsIndex = lastIndex - productsPage

    useEffect(() => {
        axios.get("http://190.60.237.163/articulos/?size=50")
            .then(res => setProductsList(res.data.RESP))
    }, [])


    const onAddProduct = (product) => {
        setAllProducts([allProducts, product])
        console.log(allProducts)
    }



    console.log(productsList)
    console.log(totalProduct)

    return (
        <div>
            {
                productsList.map((product, index) => (
                    <div key={index} className='relative left-[23rem]'>
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img 
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 
                                md:rounded-none md:rounded-l-lg" 
                                src={product.Foto} 
                                alt="" 
                            />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.Descripcion}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {product.Precio}
                                    </p>
                                    <button onClick={() => onAddProduct(product)} className='py-3 px-3 bg-blue-500 rounded-lg text-white'>
                                        agregar al carrito
                                    </button>
                                </div>
                        </a>

                    </div>

                )).slice(firsIndex, lastIndex)
            }
            <Pagination 
              productsPage={productsPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalProduct={totalProduct}
            
            />
        </div>
    )
}

export default Products
