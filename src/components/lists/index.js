import React from "react";
import { getCount } from "../../api/utils";
import { ListWrapper, ListItem, List } from "./style";

function RecommendList(props) {
  const recommendList = props.recommendList;

  return (
    <ListWrapper>
      <h1 className="title">热门推荐</h1>
      <List>
        {recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img src={item.picUrl} width="100%" height="100%" alt="music" />
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
}

export default React.memo(RecommendList);
