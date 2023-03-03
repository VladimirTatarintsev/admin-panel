import { SET_SELECTED_ORDERS } from "store/constants/actionTypes";
import { SET_IS_ALL_ORDERS_SELECTED } from "store/constants/actionTypes";
import { SET_SELECTED_ALL_ORDERS } from "store/constants/actionTypes";

export const setSelectedOrders = (payload) => ({
  type: SET_SELECTED_ORDERS,
  payload,
});
export const setIsAllOrdersSelected = (payload) => ({
  type: SET_IS_ALL_ORDERS_SELECTED,
  payload,
});
export const setSelectedAllOrders = (payload) => ({
  type: SET_SELECTED_ALL_ORDERS,
  payload,
});
