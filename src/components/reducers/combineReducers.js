import  { createStore, combineReducers }  from 'redux';
import {productReducer} from './productReducer';
import {cartReducer} from './cartReducer';



let allReducers = {
  productReducer: productReducer,
  cartReducer: cartReducer
}

let rootReducer = combineReducers(allReducers);
const store = createStore(rootReducer);

export default store;