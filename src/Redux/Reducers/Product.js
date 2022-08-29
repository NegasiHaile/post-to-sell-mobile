import { productActionTypes } from "../ActionTypes";

// Reducer of category
export const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case productActionTypes.SET_ACTIVE_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

export const filteredProductsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case productActionTypes.SET_FILTERED_PRODUCTS:
      return payload;
    default:
      return state;
  }
};
