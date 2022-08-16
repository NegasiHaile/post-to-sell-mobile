import { combineReducers } from "redux";

import { userReducer } from "./User";

const reducers = combineReducers({
  profile: userReducer,
});

export default reducers;
