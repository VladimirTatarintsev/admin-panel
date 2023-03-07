import { combineReducers } from "redux";
import { orderList } from "./orderList";
import { orderFilters } from "./orderFilters";
import { toggleFilters } from "./toggleFilters";
import { selectedOrders } from "./selectedOrders";
import { pagination } from "./pagination";
import { sorting } from "./sorting";

export default combineReducers({
  orderList,
  orderFilters,
  toggleFilters,
  selectedOrders,
  pagination,
  sorting,
});
