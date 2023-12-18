import React from "react";
import { renderRoutes } from "react-router-config";
import { Top } from "./style";

function Home(props) {
  console.log("11", props);
  const route = props.router;
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      {renderRoutes(route)}
    </div>
  );
}
export default React.memo(Home);
