import React, { useEffect, useState } from 'react'
import Products from '../Products';
import Cerrado from '../../../public/cerrado.jpeg'
import Abierto from '../../../public/abierto.jpeg'
import axios from 'axios';
import { data } from 'autoprefixer';
import Navbar from '../../components/Navbar';

// eslint-disable-next-line react/prop-types
function Home({allProducts, setAllProducts}) {

    // const [ allProducts, setAllProducts ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ countProduct, setCountProduct ] = useState(0);




    return (
        <div className='flex items-center '>
            <Products 
             allProducts={allProducts}
             setAllProducts={setAllProducts}
             total={total}
             setTotal={setTotal}
             countProduct={countProduct}
             setCountProduct={setCountProduct}
            /> 
        </div>
    )
}

export default Home
