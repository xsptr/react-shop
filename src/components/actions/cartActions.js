import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from './action-types/cart-actions'

// add cart
export const addToCart = (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//remove item
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

//substract item
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

//add item
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}