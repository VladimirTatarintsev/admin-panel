import {
  SET_SEARCH,
  CLEAR_ALL_INPUT,
  CLEAR_ACTIVE_INPUT,
  SET_STATUS,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_AMOUNT_FROM,
  SET_AMOUNT_TO,
} from "store/constants/actionTypes";

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
    case SET_SEARCH:
      return {
        ...state,
        search: payload.value,
      };
    case SET_DATE_FROM:
      return {
        ...state,
        dateFrom: payload,
      };
    case SET_DATE_TO:
      return {
        ...state,
        dateTo: payload,
      };
    case SET_AMOUNT_FROM:
      return {
        ...state,
        amountFrom: payload,
      };
    case SET_AMOUNT_TO:
      return {
        ...state,
        amountTo: payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: payload,
      };

    case CLEAR_ACTIVE_INPUT:
      return {
        ...state,
        [payload.name]: "",
      };

    case CLEAR_ALL_INPUT:
      return initialState;

    default:
      return state;
  }
};
