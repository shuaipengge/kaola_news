import * as constatns from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

export const searchFocus = () => ({
  type: constatns.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constatns.SEARCH_BLUR
});

const changeList = data => ({
  type: constatns.CHANGE_LIST,
  data: fromJS(data)
});

export const getList = () => {
  return dispath => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data;
        dispath(changeList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
