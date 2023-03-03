import { SET_FILTERS } from "store/constants/actionTypes";
import { SET_CLEAR_ALL_INPUT } from "store/constants/actionTypes";
import { SET_CLEAR_ACTIVE_INPUT } from "store/constants/actionTypes";

const initialState = {
  search: "",
  dateFrom: "",
  dateTo: "",
  amountFrom: "",
  amountTo: "",
  status: "",
};

export const orderFilters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTERS:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case SET_CLEAR_ACTIVE_INPUT:
      return {
        ...state,
        [payload.name]: "",
      };

    case SET_CLEAR_ALL_INPUT:
      return initialState;

    default:
      return state;
  }
};
