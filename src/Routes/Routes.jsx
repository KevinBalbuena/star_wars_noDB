import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Section from "../Components/Section/Section";
import Home from "../Components/Home/Home";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Section} />
        <Route exact path="/home" component={Home} />
      </Switch>
    );
  }
}
