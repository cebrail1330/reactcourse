import * as actionTypes from "./actionTypes"
import axios from "axios";


export function getProduct(){
    return function (dispatch){
        return axios.get("http://localhost:3000/products")
            .then(response => dispatch(getCategoriesSuccess(response.data)))
    }
}

export function getCategoriesSuccess(products){
    return {
        type:actionTypes.GET_PRODUCT_SUCCESS,
        payload:products
    }
}