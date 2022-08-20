import { combineReducers } from "redux";

import { userReducer } from "./User";
import { categoryReducer } from "./Category";

const reducers = combineReducers({
  profile: userReducer,
  categories: categoryReducer,
});

export default reducers;
