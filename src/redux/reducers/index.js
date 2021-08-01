import { combineReducers } from "redux";
import menuReducers from "./menuReducers";
import restaurantReducers from "./restaurantReducers";

const rootReducer = combineReducers({
  menuReducers,
  restaurantReducers,
});

export default rootReducer;
