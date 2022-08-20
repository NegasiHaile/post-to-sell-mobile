import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers";
import thunk from "redux-thunk";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };
