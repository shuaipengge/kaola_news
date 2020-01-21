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
  ],
  articleList: [
    {
      id: 1,
      title: "考拉非常可爱1",
      desc:
        "考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱",
      imgUrl:
        "https://koala.net/images/learn/xexchange_students.jpg.pagespeed.ic.h8gl-632qj.webp",
      like: 18,
      read: 56,
      zuan: "15.7",
      zuozhe: "小考拉"
    },
    {
      id: 2,
      title: "考拉非常可爱2",
      desc:
        "考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱",
      imgUrl:
        "https://koala.net/images/learn/xexchange_students.jpg.pagespeed.ic.h8gl-632qj.webp",
      like: 18,
      read: 56,
      zuan: "15.7",
      zuozhe: "小考拉"
    },
    {
      id: 3,
      title: "考拉非常可爱3",
      desc:
        "考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱",
      imgUrl:
        "https://koala.net/images/learn/xexchange_students.jpg.pagespeed.ic.h8gl-632qj.webp",
      like: 18,
      read: 56,
      zuan: "15.7",
      zuozhe: "小考拉"
    },
    {
      id: 4,
      title: "考拉非常可爱4",
      desc:
        "考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱考拉非常可爱",
      imgUrl:
        "https://koala.net/images/learn/xexchange_students.jpg.pagespeed.ic.h8gl-632qj.webp",
      like: 18,
      read: 56,
      zuan: "15.7",
      zuozhe: "小考拉"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
