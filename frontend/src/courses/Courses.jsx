import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Course from '../Components/Course'

export class Courses extends Component {
  static propTypes = {}

  render() {
    return (
      <>
       <Navbar></Navbar>
       <Course></Course> 
       <Footer></Footer>
      </>
    )
  }
}

export default Courses