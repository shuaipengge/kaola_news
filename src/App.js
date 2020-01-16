import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyled } from "./style.js";
import { Globalicon } from "./statics/iconfont/iconfont.js";
import Header from "./common/header";

function App() {
  return (
    <Fragment>
      <GlobalStyled />
      <Globalicon />
      <Provider store={store}>
        {/* Provider下所有的组件都可以使用store */}
        <Header />
      </Provider>
    </Fragment>
  );
}

export default App;
