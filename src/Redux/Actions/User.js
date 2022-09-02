import { userActionTypes } from "../ActionTypes";

// Set the user profile
export const _setProfile = (profile) => {
  return {
    type: userActionTypes.SET_PROFILE,
    payload: profile,
  };
};
