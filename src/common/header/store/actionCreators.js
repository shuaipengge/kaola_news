import * as constatns from "./constants";
import { fromJS } from "immutable";
import axios from "axios";

export const searchFocus = () => ({
  type: constatns.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constatns.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constatns.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constatns.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: constatns.CHANGE_PAGE,
  page
})

const changeList = data => ({
  type: constatns.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
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
