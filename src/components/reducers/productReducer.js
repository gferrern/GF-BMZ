import {
  GET_PRODUCT_DATA_BEGIN,
  GET_PRODUCT_DATA_SUCCESS,
  GET_PRODUCT_DATA_FAILURE,
} from "../actions/action-types/productactions";
import Global from "../../Global";
import axios from "axios";

const initState = {
  items: [],
  loading: true,
  error: null,
};

export const productReducer = async (state = initState, action) => {
  try {
    //INSIDE HOME COMPONENT
    if (action.type === GET_PRODUCT_DATA_BEGIN) {
      const items = action.payload;
      return {
        ...state,
        items,
        loading: true,
        error: null,
      };
    }
    if (action.type === GET_PRODUCT_DATA_SUCCESS) {
      const items = action.payload;
      return {
        ...state,
        items: action.payload.data,
        loading: false,
      };
    }

    if (action.type === GET_PRODUCT_DATA_FAILURE) {
      const items = action.payload;
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload.error,
      };
    }
  } catch (error) {
    if (action.type === GET_PRODUCT_DATA_FAILURE) {
      const items = action.payload;
      return {
        ...state,
        items: [],
        loading: false,
        error: error,
      };
    }
  }
  return state;
};
