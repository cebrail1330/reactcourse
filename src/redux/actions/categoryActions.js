import * as actionTypes from "./actionTypes"
import axios from "axios";

export function changeCategory(category) {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }

}

export function getCategories(){
    return function (dispatch){
        return fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(result => dispatch(getCategoriesSuccess(result)))

    }

}

export function getCategoriesSuccess(categories){
    return {
        type:actionTypes.GET_CATEGORIES_SUCCESS, payload: categories
    }
}
