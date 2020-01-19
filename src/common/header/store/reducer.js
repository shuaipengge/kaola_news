import * as constatns from "./constants";
import { fromJS } from "immutable";
// immutable库

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constatns.SEARCH_FOCUS:
      return state.set("focused", true);
    case constatns.SEARCH_BLUR:
      return state.set("focused", false);
    case constatns.CHANGE_LIST:
      return state.set("list", action.data);
    default:
      return state;
  }
};
