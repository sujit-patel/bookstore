import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
// import Book from './Components/Book'
import Footer from './Components/Footer'
import Banner from './Components/Banner'

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
      </>
    )
  }
}

export default App