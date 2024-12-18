import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

export class Contacts extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='h-screen flex flex-col justify-between'>
        <Navbar></Navbar>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
  }
}

export default Contacts