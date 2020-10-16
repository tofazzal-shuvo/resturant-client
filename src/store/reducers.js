import { combineReducers } from "redux";
import { CardReducer } from "./modules";

export default combineReducers({
  card: CardReducer,
});
