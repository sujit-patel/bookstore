import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home