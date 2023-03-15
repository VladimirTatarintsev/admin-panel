import { TOGGLE_FILTERS } from "store/constants/actionTypes";

const initialState = {
  isFiltersVisible: false,
};

export const toggleFilters = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_FILTERS:
      return {
        isFiltersVisible: !state.isFiltersVisible,
      };
    default:
      return state;
  }
};
