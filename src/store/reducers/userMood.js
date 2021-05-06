import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const initialState = {
  mood: "",
};

const changeMood = (state, payload) => {
  const mood = payload.mood;
  return updateObject(state, { mood: mood });
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case actionTypes.CHANGEMOOD:
      return changeMood(state, payload);
    default:
      return state;
  }
};

export default reducer;