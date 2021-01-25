import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function addProductReducer(state=initialState.newProducts, action){
    switch (action.type){
        case actionTypes.ADD_TO_PRODUCT:
            return action.payload;
        default:
            return state;
    }

}

