import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Section from "../Components/Section/Section";
import GetAllPlayer from "../Components/GetAllPlayer/GetAllPlayer";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Section} />
        <Route exact path="/project" component={GetAllPlayer} />
      </Switch>
    );
  }
}
