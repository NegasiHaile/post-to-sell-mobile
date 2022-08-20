import { categoryActionTypes } from "../ActionTypes";

// Reducer of category
export const categoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case categoryActionTypes.SET_CATEGORIES:
      return payload;
    default:
      return state;
  }
};
