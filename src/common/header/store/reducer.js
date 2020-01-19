import * as constatns from "./constants";
import { fromJS } from "immutable";
import { constants } from ".";
// immutable库

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constatns.SEARCH_FOCUS:
      return state.set("focused", true);
    case constatns.SEARCH_BLUR:
      return state.set("focused", false);
    case constatns.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
