import {
  SET_SEARCH,
  CLEAR_ALL_INPUT,
  CLEAR_ACTIVE_INPUT,
  SET_DATE_FROM,
  SET_DATE_TO,
  SET_AMOUNT_FROM,
  SET_AMOUNT_TO,
  SET_STATUS,
} from "store/constants/actionTypes";

export const setStatus = (payload) => ({
  type: SET_STATUS,
  payload,
});
export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});
export const setDateFrom = (payload) => ({
  type: SET_DATE_FROM,
  payload,
});
export const setDateTo = (payload) => ({
  type: SET_DATE_TO,
  payload,
});
export const setAmountFrom = (payload) => ({
  type: SET_AMOUNT_FROM,
  payload,
});
export const setAmountTo = (payload) => ({
  type: SET_AMOUNT_TO,
  payload,
});
export const clearActiveInput = (payload) => ({
  type: CLEAR_ACTIVE_INPUT,
  payload,
});
export const clearAllInput = () => ({
  type: CLEAR_ALL_INPUT,
});
