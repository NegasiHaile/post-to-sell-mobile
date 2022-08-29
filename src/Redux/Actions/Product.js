import { productActionTypes } from "../ActionTypes";

// Set the user profile
export const _setAllActiveProducts = (products) => {
  return {
    type: productActionTypes.SET_ACTIVE_PRODUCTS,
    payload: products,
  };
};

export const _setFilteredProducts = (filteredProducts) => {
  return {
    type: productActionTypes.SET_FILTERED_PRODUCTS,
    payload: filteredProducts,
  };
};
