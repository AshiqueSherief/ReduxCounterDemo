import { INCREMENT, DECREMENT, TEXTADD, TEXTSUB } from "./CounterTypes";

export const increment = (num) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};
export const decrement = (num) => {
  return {
    type: DECREMENT,
    payload: num,
  };
};
export let textadd = (txt) => {
  return {
    type: TEXTADD,
    payload: parseInt(txt),
  };
};
export let textsub = (txt) => {
  return {
    type: TEXTSUB,
    payload: parseInt(txt),
  };
};
