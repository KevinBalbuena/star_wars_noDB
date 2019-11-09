import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Intro from "../Components/Intro/Intro";
import Home from "../Components/Home/Home";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/home" component={Home} />
      </Switch>
    );
  }
}
