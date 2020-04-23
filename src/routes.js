import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/registro" component={Register} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
