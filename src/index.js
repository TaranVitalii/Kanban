import React from "react";
import ReactDOM from "react-dom";
import Table from "./components/Table";
import SignIn from "./components/Auth/";
import Registry from "./components/Registry";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/table" component={Table} />
        <Route path="/registry" component={Registry} />
        <Route path="/login" component={SignIn} />
        <Route path="*" component={SignIn} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
