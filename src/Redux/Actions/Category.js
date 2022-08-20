import { categoryActionTypes } from "../ActionTypes";

export const _setCategories = (categories) => {
  return {
    type: categoryActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};
