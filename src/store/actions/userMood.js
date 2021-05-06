import * as actionTypes from "./actionTypes";

const { CHANGEMOOD, } = actionTypes;

export const increment = (payload) => ({
  type: CHANGEMOOD,
  payload: payload
});
