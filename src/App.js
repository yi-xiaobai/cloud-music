import React from "react";
import { GlobalStyle } from "./style";
// 引入路由配置文件
import routes from "./routes";
// 读取路由配置转为标签
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
// 引入store
import store from "./store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
