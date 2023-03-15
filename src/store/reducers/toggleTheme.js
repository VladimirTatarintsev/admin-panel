import { TOGGLE_THEME } from "store/constants/actionTypes";

const initialState = {
  isDarkModeOn: false,
};

export const toggleTheme = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      return {
        isDarkModeOn: !state.isDarkModeOn,
      };
    default:
      return state;
  }
};
