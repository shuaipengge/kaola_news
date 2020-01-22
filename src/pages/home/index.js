import React, { Component } from "react";
import { connect } from "react-redux";
import Topic from "./Components/Topic";
import List from "./Components/List";
import Recommend from "./Components/Recommend";
import Writer from "./Components/Writer";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { actionCreators } from "./store";

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
    this.props.changeHomeData();
  }
}

const mapDispath = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
});
export default connect(null, mapDispath)(Home);
