import { combineReducers } from "redux";
import { CartReducer, InfoReducer } from "./modules";

export default combineReducers({
  cart: CartReducer,
  info: InfoReducer,
});
