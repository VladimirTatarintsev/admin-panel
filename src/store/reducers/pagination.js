import { SET_PAGINATION } from "store/constants/actionTypes";

const initialState = {
  currentPage: 1,
  pageLimit: 5,
};

export const pagination = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGINATION:
      return {
        ...state,
        currentPage: payload,
      };

    default:
      return state;
  }
};
