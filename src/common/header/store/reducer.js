import * as constatns from "./constants";
import { fromJS } from "immutable";
// immutable库

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === constatns.SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值返回一个全新的对象
    return state.set("focused", true);
  }
  if (action.type === constatns.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  return state;
};
