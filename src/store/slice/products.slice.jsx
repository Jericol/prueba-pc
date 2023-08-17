import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload
            return products
        }
    }
})

export const thunkName = () => (dispatch) => {
    return axios.get("http://190.60.237.163/articulos/?size=2000")
        .then((res) => dispatch(res.data.RESP))
        
}

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
