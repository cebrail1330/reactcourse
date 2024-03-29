import * as actionTypes from "../actions/actionTypes"

import  initialState from "./initialState"



export default function addToCart(state=initialState.cart, action){
    switch (action.type){
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c=>c.product.id === action.payload.product.id)
            if(addedItem){
                const newState = state.map(c=> {
                   if( c.product.id === action.payload.product.id){

                        return Object.assign({}, addedItem, {quantity: addedItem.quantity + 1, unitPrice: addedItem.product.unitPrice * (addedItem.quantity  + 1) })
                   }
                   return c
                })
                return newState;
            }else {
                return [...state, {...action.payload}]

            }
        case actionTypes.REMOVE_FROM_CART:
            const newState = state.filter(cartItem => cartItem.product.id !== action.payload.id)
            return newState;
        default:
            return state;
    }
}