import { SET_TEXT, ADD_TEXT, DEL_TEXT, CLEAR_TEXT, CALC_TEXT } from "./types";

// define action payload
export const setText = (newText) => {
  return { type: SET_TEXT, payload: newText };
};

export const addText = (text) => {
  return { type: ADD_TEXT, payload: text };
};

export const delText = () => {
  return { type: DEL_TEXT };
};

export const clearText = () => {
  return { type: CLEAR_TEXT };
};

export const calcText = () => {
  return { type: CALC_TEXT };
};
