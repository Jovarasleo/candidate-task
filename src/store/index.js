import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "../auth";
import middleware from "./middleware";
const rootReducer = combineReducers({
  auth: auth.reducer,
});
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
