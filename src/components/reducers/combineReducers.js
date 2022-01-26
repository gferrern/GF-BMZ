import  { createStore, combineReducers, applyMiddleware}  from 'redux';
import {productReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import thunk from 'redux-thunk';



let allReducers = {
  products: productReducer,
  cart: cartReducer
}

let rootReducer = combineReducers(allReducers);
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;