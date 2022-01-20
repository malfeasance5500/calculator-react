import {
  SET_TEXT,
  ADD_TEXT,
  DEL_TEXT,
  CLEAR_TEXT,
  CALC_TEXT,
} from "../actions/types";

// define initial state of calculator text state
const INITIAL_STATE = "";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;
    case ADD_TEXT:
      return state + action.payload.toString();
    case DEL_TEXT:
      return state.slice(0, state.length - 1);
    case CLEAR_TEXT:
      return "";
    case CALC_TEXT:
      return eval(state).toString();
    default:
      return state;
  }
};
