import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import { GlobalStyled } from "./style.js";
import { Globalicon } from "./statics/iconfont/iconfont.js";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Write from "./pages/write";

function App() {
  return (
    <Fragment>
      <GlobalStyled />
      <Globalicon />
      <Provider store={store}>
        {/* Provider下所有的组件都可以使用store */}
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/write" exact component={Write}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
