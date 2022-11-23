import { INCREMENT, DECREMENT, TEXTADD, TEXTSUB } from "./CounterTypes";

const initialState = {
  count: 0,
};
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case TEXTADD:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case TEXTSUB:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
export default CounterReducer;
