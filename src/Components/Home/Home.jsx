import React, { Component } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
