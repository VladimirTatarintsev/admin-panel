import { xor } from "helpers/helpers";
import {
  SET_SELECTED_ORDERS,
  SET_IS_ALL_ORDERS_SELECTED,
  SET_SELECTED_ALL_ORDERS,
} from "store/constants/actionTypes";

const initialState = {
  selectedOrders: [],
  isAllOrdersSelected: false,
};

export const selectedOrders = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_ORDERS:
      if (!!payload) {
        return { ...state, selectedOrders: xor(state.selectedOrders, payload) };
      } else return initialState;
    case SET_IS_ALL_ORDERS_SELECTED:
      return {
        ...state,
        isAllOrdersSelected: payload,
      };
    case SET_SELECTED_ALL_ORDERS:
      if (state.isAllOrdersSelected) {
        return { ...state, selectedOrders: payload };
      } else return { ...state, selectedOrders: [] };

    default:
      return state;
  }
};
