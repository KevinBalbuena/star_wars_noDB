import React, { Component } from "react";
import Characters from "../Characters/Characters";
import Header from "../Header/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Characters />
      </div>
    );
  }
}
