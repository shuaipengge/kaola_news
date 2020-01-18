import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";

const Header = props => {
  // 无状态组件 提高性能
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe601;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe60d;
          </span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe616;</span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

// state 代表store里的所有数据
const mapStateToProps = state => {
  return {
    focused: state.header.focused
  };
};

const mapDispathToProps = dispath => {
  return {
    handleInputFocus() {
      const action = {
        type: "seatch_focus"
      };
      dispath(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blue"
      };
      dispath(action);
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
