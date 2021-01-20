import * as actionTypes from "./actionTypes"
import axios from "axios";


export function getProduct(categoryId){
    return function (dispatch){
        let url ="http://localhost:3000/products";
        if(categoryId){
            url = url + "?categoryID="+categoryId
        }
        return axios.get(url)
            .then(response => dispatch(getCategoriesSuccess(response.data)))
    }
}

export function getCategoriesSuccess(products){
    return {
        type:actionTypes.GET_PRODUCT_SUCCESS,
        payload:products
    }
}
