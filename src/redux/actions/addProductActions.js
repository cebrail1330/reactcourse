import * as actionTypes from "./actionTypes"
import axios from "axios";


export function addProduct(product){
        let url = "https://localhost:3000/products/"+ "";
        console.log(JSON.stringify(product))
        return fetch(url,  {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(product)
        })
            .then(handleResponse).catch(handleError)


}
export async function handleResponse(response) {
    if(response.ok){
        return response.json();
    }
    const error = await response.text()
    throw new Error(error);
}

export function handleError(error) {
    console.log("Bir hata oluştu");
    throw error;
}
export function addProductSuccess(products){
    return {
        type:actionTypes.ADD_TO_PRODUCT,
        payload: products
    }
}



