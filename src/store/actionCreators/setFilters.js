import { SET_FILTERS } from "store/constants/actionTypes";

export const setFilters = (payload) => ({
  type: SET_FILTERS,
  payload,
});
