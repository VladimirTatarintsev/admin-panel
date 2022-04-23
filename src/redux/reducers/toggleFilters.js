import { TOGGLE_FILTERS } from "redux/constants/actionTypes";

const initialState = {
  isFiltersVisible: false,
};

export const toggleFilters = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_FILTERS:
      return {
        ...state,
        isFiltersVisible: !state.isFiltersVisible,
      };
    default:
      return state;
  }
};
