import { combineReducers } from "redux";

import { userReducer } from "./User";
import { categoryReducer } from "./Category";

const reducers = combineReducers({
  profile: userReducer,
  category: categoryReducer,
});

export default reducers;
