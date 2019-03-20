import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import HelloWorld from "./components/HelloWorld";
import Granny from "./components/Granny";

export default function Router(props) {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/HelloWorld" component={HelloWorld} />
      <Route path="/granny" component={Granny} />
    </Switch>
  );
}
