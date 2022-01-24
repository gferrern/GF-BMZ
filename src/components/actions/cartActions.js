
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,GET_PRODUCT_DATA,INIT_PRODUCTS,SEARCH, ERROR_GENERATED} from './action-types/cart-actions'
import Global from '../../Global';
import axios from 'axios';

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        payload:{
            id: id
        }
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        payload:{
            id: id
        }
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        payload:{
            id: id
        }
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        payload:{
            id: id
        }
    }
}

export const initProducts=(data)=>{
    return{
        type: INIT_PRODUCTS,
        payload:{
            data: data
        }
    }
}

export const search=(filter)=>{
    return{
        type: SEARCH,
        payload:{
            filter: filter
        }        
    }
}

export const errorGenerated=(error)=>{
    return{
        type: ERROR_GENERATED,
        payload: error
    }
}

export const getProductData = ()=>{
    return function(dispatch) {
        axios.get(`${Global.baseURL}/product`)
            .then(response => {
                dispatch({
                    type: GET_PRODUCT_DATA,
                    payload:{
                        data: response.data
                    }
                })
            })
    }
}
