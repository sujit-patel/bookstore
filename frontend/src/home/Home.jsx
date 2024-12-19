import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import FreeBook from "../Components/FreeBook";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <FreeBook></FreeBook>
      <Footer></Footer>
    </div>
  );
}
export default Home;
