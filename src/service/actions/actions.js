import {ADD_TO_CART, REMOVE_TO_CART} from '../constants'

export const addToCart = (data) => {
    // console.log(">>>>actioin",data)
    return {        
        type: ADD_TO_CART,
        data: data
    }
}

// related to which part is defined by type
export const removeToCart = () => {
    // console.log("action")
    return {        
        type: REMOVE_TO_CART,
  
    }
}

