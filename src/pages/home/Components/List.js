import React, { Component } from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(item => {
          return (
            <ListItem key={item.get("id")}>
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
          );
        })}
      </div>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "articleList"])
});
export default connect(mapState)(List);
