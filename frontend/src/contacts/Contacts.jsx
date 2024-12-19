import React from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

function Contacts() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar></Navbar>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Contacts;
