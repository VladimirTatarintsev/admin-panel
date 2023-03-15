import { EDIT_ORDER, IS_EDIT_FORM_ACTIVE } from "store/constants/actionTypes";

const initialState = {
  orderId: "",
  isEditFormActive: false,
};

export const editOrder = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_ORDER: {
      return {
        ...state,
        orderId: payload,
      };
    }
    case IS_EDIT_FORM_ACTIVE: {
      return {
        ...state,
        isEditFormActive: !state.isEditFormActive,
      };
    }
    default:
      return state;
  }
};
