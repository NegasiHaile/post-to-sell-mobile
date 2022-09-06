import { userActionTypes } from "../ActionTypes";

// Reducer of category
export const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case userActionTypes.SET_PROFILE:
      return payload;
    default:
      return state;
  }
};
