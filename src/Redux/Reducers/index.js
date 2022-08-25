import { combineReducers } from "redux";

import { userReducer } from "./User";
import { categoryReducer } from "./Category";
import { productReducer } from "./Product";

const reducers = combineReducers({
  profile: userReducer,
  categories: categoryReducer,
  allProducts: productReducer,
});

export default reducers;
