import PropTypes from "prop-types";
import React, { Component } from "react";
import Home from "./home/Home.jsx";

export class App extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default App;
