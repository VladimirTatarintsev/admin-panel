import { combineReducers } from "redux";
import { orderList } from "./orderList";
import { orderFilters } from "./orderFilters";
import { toggleFilters } from "./toggleFilters";

export default combineReducers({
  orderList,
  orderFilters,
  toggleFilters,
});
