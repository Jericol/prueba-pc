/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './slice/products.slice'


export default configureStore({
    reducer: {
        products: productSlice,

    }
})
