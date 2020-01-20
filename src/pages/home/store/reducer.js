import { fromJS } from "immutable";
// immutable库

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "考拉",
      imgUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579542563037&di=d08f0ef486409ec301cd88ea3f6961ec&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FicZklJrRfHgAShLAq8Wpoib4eLBqyhYMrZ1y4WFtefO4VK2nd1fLp1Nic2tFMS7OkGUa13ApAAVMblDyPaBKlOytg%2F0%3Fwx_fmt%3Djpeg"
    },
    {
      id: 2,
      title: "可爱😊考拉",
      imgUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579542563037&di=d08f0ef486409ec301cd88ea3f6961ec&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FicZklJrRfHgAShLAq8Wpoib4eLBqyhYMrZ1y4WFtefO4VK2nd1fLp1Nic2tFMS7OkGUa13ApAAVMblDyPaBKlOytg%2F0%3Fwx_fmt%3Djpeg"
    },
    {
      id: 3,
      title: "考拉",
      imgUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579542563037&di=d08f0ef486409ec301cd88ea3f6961ec&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FicZklJrRfHgAShLAq8Wpoib4eLBqyhYMrZ1y4WFtefO4VK2nd1fLp1Nic2tFMS7OkGUa13ApAAVMblDyPaBKlOytg%2F0%3Fwx_fmt%3Djpeg"
    },
    {
      id: 4,
      title: "可爱😊考拉",
      imgUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579542563037&di=d08f0ef486409ec301cd88ea3f6961ec&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FicZklJrRfHgAShLAq8Wpoib4eLBqyhYMrZ1y4WFtefO4VK2nd1fLp1Nic2tFMS7OkGUa13ApAAVMblDyPaBKlOytg%2F0%3Fwx_fmt%3Djpeg"
    },
    {
        id: 5,
        title: "考拉",
        imgUrl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579542563037&di=d08f0ef486409ec301cd88ea3f6961ec&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FicZklJrRfHgAShLAq8Wpoib4eLBqyhYMrZ1y4WFtefO4VK2nd1fLp1Nic2tFMS7OkGUa13ApAAVMblDyPaBKlOytg%2F0%3Fwx_fmt%3Djpeg"
      }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
