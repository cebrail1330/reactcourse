import * as actionTypes from "./actionTypes"
import axios from "axios";


export function addProduct(product){
    return function (dispatch){
        let url ="http://localhost:3000/products/"
        return axios.post(url, {product}, {
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => dispatch(addProductSuccess(response.data)))
    }

}

export function addProductSuccess(products) {
    return {
        type: actionTypes.ADD_TO_PRODUCT,
        payload: products
    }
}



