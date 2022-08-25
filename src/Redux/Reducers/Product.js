import { productActionTypes } from "../ActionTypes";

// Reducer of category
export const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case productActionTypes.SET_All_PRODUCTS:
      return payload;
    default:
      return state;
  }
};
