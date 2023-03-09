import { EDIT_ORDER, IS_EDIT_FORM_ACTIVE } from "store/constants/actionTypes";

export const setEditOrder = (payload) => ({
  type: EDIT_ORDER,
  payload,
});
export const setIsEditFormActive = () => ({
  type: IS_EDIT_FORM_ACTIVE,
});
