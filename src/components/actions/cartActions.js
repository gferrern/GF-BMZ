
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, SEARCH} from './action-types/cartactions'
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

export const search=(filter)=>{
    return{
        type: SEARCH,
        payload:{
            filter: filter
        }        
    }
}

