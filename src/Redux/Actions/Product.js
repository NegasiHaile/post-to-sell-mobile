import { productActionTypes } from "../ActionTypes";

// Set the user profile
export const _setAllActiveProducts = (products) => {
  return {
    type: productActionTypes.SET_All_PRODUCTS,
    payload: products,
  };
};
