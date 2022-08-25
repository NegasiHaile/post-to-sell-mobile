import { productActionTypes } from "../ActionTypes";

// Set the user profile
export const _setAllProducts = (products) => {
  return {
    type: productActionTypes.SET_All_PRODUCTS,
    payload: products,
  };
};
