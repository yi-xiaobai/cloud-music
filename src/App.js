import "./App.css";
import { GlobalStyle } from "./style";
// 引入路由配置文件
import routes from "./routes";
// 读取路由配置转为标签
import {} from 'react-router-config'

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
