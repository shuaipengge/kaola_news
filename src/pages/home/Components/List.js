import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link to="/detail">
              <ListItem key={index}>
                <img className="pic" src={item.get("imgUrl")} alt="img" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                  <span className="tag">
                    收藏:{item.get("like")} ID:{item.get("zuozhe")} 阅读:
                    {item.get("read")} 赞:{item.get("zuan")}
                  </span>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多资讯</LoadMore>
      </div>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});

const mapDispath = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapState, mapDispath)(List);
