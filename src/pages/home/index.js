import React, { Component } from "react";
import Topic from "./Components/Topic";
import List from "./Components/List";
import Recommend from "./Components/Recommend";
import Writer from "./Components/Writer";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://koala.net/images/learn/xexchange_students.jpg.pagespeed.ic.h8gl-632qj.webp"
          />
          <Topic></Topic>
          <List></List>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeLeft>
        <HomeRight>right</HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
