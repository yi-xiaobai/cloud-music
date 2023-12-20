import React from "react";
import { Top, Tab, TabItem } from "./style";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

function Home(props) {
  console.log("11", props);
  const route = props.route;
  console.log("==>Get route", route);
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </div>
  );
}
export default React.memo(Home);
