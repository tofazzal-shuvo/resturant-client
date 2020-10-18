import { combineReducers } from "redux";
import { CardReducer, InfoReducer } from "./modules";

export default combineReducers({
  card: CardReducer,
  info: InfoReducer,
});
