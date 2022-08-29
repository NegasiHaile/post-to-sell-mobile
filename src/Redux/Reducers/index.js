import { combineReducers } from "redux";

import { userReducer } from "./User";
import { categoryReducer } from "./Category";
import { productReducer, filteredProductsReducer } from "./Product";

const reducers = combineReducers({
  profile: userReducer,
  categories: categoryReducer,
  allActiveProducts: productReducer,
  filteredProducts: filteredProductsReducer,
});

export default reducers;
