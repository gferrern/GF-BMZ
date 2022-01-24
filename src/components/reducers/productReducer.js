import { GET_PRODUCT_DATA, SEARCH } from "../actions/action-types/cart-actions";
import Global from "../../Global";
import axios from "axios";

const initState = {
  items: [],
  isShow: true,
};

export const productReducer = async(state = initState, action) => {
  try {
    if (action.type === SEARCH) {
      /*
      state.items.array.forEach((element) => {
        if (
          element.brand === action.payload.filter ||
          element.model === action.payload.filter
        ) {
          element.isShow = true;
        } else {
          element.isShow = false;
        }
      });
      state.items.find((item) => (item.isShow = true));
      */
    }
    //INSIDE HOME COMPONENT
    if (action.type === GET_PRODUCT_DATA) {
      const items = action.payload;
      return {
        ...state,
        items
      };
    }
  } catch (error) {
    console.log("error");
  }
  return state;
};
