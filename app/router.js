import React from "react";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";
import HomePage from "./pages/home";
import HangZhou from "./pages/hangzhou";
import ChangSha from "./pages/changsha";
import App from "./pages/App";
import NanJing from "./pages/nanjing";
import WuZhen from "./pages/wuzhen";
import XiaMen from "./pages/xiamen";
import LiYang from "./pages/liyang";
import BengBu from "./pages/bengbu";
import NoMsgPage from "./pages/noMatch";


const routers = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="hangzhou" component={HangZhou}>

      </Route>
      <Route path="changsha" component={ChangSha}>

      </Route>
      <Route path="nanjing" component={NanJing}>

      </Route>
      <Route path="wuzhen" component={WuZhen}>

      </Route>
      <Route path="xiamen" component={XiaMen}>

      </Route>
      <Route path="liyang" component={LiYang}>

      </Route>
      <Route path="bengbu" component={BengBu}>

      </Route>
      <Route path="*" component={NoMsgPage} />
    </Route>
  </Router>
);

export default routers;
