import Global from '../../Global';

import {
  GET_PRODUCT_DATA_SUCCESS,
  GET_PRODUCT_DATA_FAILURE,
  GET_PRODUCT_DATA_BEGIN,
} from "./action-types/productactions";

export const getProductsBegin = () => ({
  type: GET_PRODUCT_DATA_BEGIN,
});

export const getProductsSuccess = (res) => ({
  type: GET_PRODUCT_DATA_SUCCESS,
  payload: { res },
});

export const getProductsFailure = (error) => ({
  type: GET_PRODUCT_DATA_FAILURE,
  payload: { error },
});

export function getProductData() {
  return (dispatch) => {
    dispatch(getProductsBegin());
    return fetch(`${Global.baseURL}/product`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(getProductsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(getProductsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
