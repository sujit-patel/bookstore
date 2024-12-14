import PropTypes from "prop-types";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom"; // Corrected import
import Home from "./home/Home.jsx";
import Course from './courses/Courses.jsx';
import Signup from "./Components/Signup.jsx";

export class App extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </>
    );
  }
}

export default App;
