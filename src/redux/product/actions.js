import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, SINGLE_PRODUCT } from "../actions";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const editProduct = (payload, history) => ({
  type: EDIT_PRODUCT,
  payload,
  history,
});

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const singleProduct = (payload) => ({
  type: SINGLE_PRODUCT,
  payload,  
});
