import React, { Fragment } from "react";
import { GlobalStyled } from "./style.js";
import { Globalicon } from "./statics/iconfont/iconfont.js";
import Header from "./common/header";

function App() {
  return (
    <Fragment>
      <GlobalStyled />
      <Globalicon />
      <Header />
    </Fragment>
  );
}

export default App;
