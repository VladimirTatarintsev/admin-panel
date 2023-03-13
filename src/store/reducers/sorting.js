import {
  SET_SORT_DIRECTION,
  SET_ORDER_SORTING,
} from "store/constants/actionTypes";

const initialState = {
  key: "id",
  direction: "asc",
};

export const sorting = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ORDER_SORTING:
      return {
        ...state,
        key: payload,
      };
    case SET_SORT_DIRECTION:
      return {
        ...state,
        direction: payload,
      };

    default:
      return state;
  }
};
