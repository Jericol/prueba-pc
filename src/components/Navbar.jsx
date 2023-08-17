/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart';
import { RiFlutterLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Navbar({ allProducts, setAllProducts }) {


    const [active, setActive] = useState(false)



    return (
        <header className='flex justify-between p-6'>
            <h2>Tienda</h2>
            <ul>
                <li>nuevos</li>
                <li>displey</li>
                <li>visores</li>
                <li>baterias</li>
            </ul>
            {/* container-icon */}
            <div className='relative'>
                {/* container-cart-icon */}
                <div className='' onClick={() => setActive(!active)}>
                    {/* icon-cart */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>

                    {/* count-products */}
                    <div className='absolute top-1/2 right-0 bg-[#000] text-white 
                          w-[15px] h-[15px] flex justify-center items-center shadow-lg '
                    >
                        <span className='text-lg'>0</span>
                    </div>
                </div>
                {/* desplegable  */}

                {/* container-cart-products */}
                <div className={`absolute top-[50px] -right-0  bg-red-500 w-[400px] z-[1] 
                    shadow-lg shadow-black rounded-lg ${active ? '' : 'hidden'}`}
                >
                    {
                        allProducts.length ? (
                            <>
                                {/* cart-product */}
                                <div className='flex items-center justify-between p-[30px] border border-black'>
                                    <div>
                                        {/* info-cart-product */}
                                        <div className='flex justify-between  flex-1 '>
                                            {/* cantidad-producto-carrito */}
                                            <span className='font-normal text-sm'>2</span>
                                            {/* titulo-producto-carrito */}
                                            <p className='text-base'>Aceite wall</p>
                                            {/* precio-producto-carrito */}
                                            <span className='font-bold text-lg ml-3'>$ 80.000</span>
                                        </div>
                                        {/* icon-close */}
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='1.5'
                                            stroke='currentColor'
                                            className='w-[25px] h-[25px] hover:cursor-pointer'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {/* cart-total */}
                                <div className='flex items-center justify-center p-4 gap-5'>
                                    <h3 className='text-lg font-bold'>total</h3>
                                    {/* total-pagar */}
                                    <span className='font-extrabold text-lg'>$ 10.000</span>
                                </div>
                            </>
                        ) : (
                            <p>carrito vacio</p>
                        )
                    }
                </div>
            </div>
        </header >
    );
}

export default Navbar
