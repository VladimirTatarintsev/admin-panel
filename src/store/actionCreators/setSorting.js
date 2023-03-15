import {
  SET_SORT_DIRECTION,
  SET_ORDER_SORTING,
} from "store/constants/actionTypes";

export const setOrderSorting = (payload) => ({
  type: SET_ORDER_SORTING,
  payload,
});

export const setSortDirection = (payload) => ({
  type: SET_SORT_DIRECTION,
  payload,
});
