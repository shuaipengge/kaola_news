import React, { Component } from "react";
import { connect } from "react-redux";
import Topic from "./Components/Topic";
import List from "./Components/List";
import Recommend from "./Components/Recommend";
import Writer from "./Components/Writer";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import axios from "axios";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://koala.net/images/learn/xexchange_students.jpg.pagespeed.ic.h8gl-632qj.webp"
            alt="images"
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = {
        type: "change_home_data",
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      };
      this.props.changeHomeData(action);
    });
  }
}

const mapDispath = dispatch => ({
  changeHomeData(action) {
    dispatch(action);
  }
});
export default connect(null, mapDispath)(Home);
