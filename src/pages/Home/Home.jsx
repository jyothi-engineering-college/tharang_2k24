import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import DateStrip from "../../components/DateStrip/DateStrip";
import Bento from "../../components/Bento/Bento";
import Footer from "../../components/Footer/Footer";
import FeaturedEvents from "../../components/FeaturedEvents/FeaturedEvents";

function Home() {


  return (
    <>
      <div className="veed">
        <Navbar />
        <Header />
        <DateStrip />
        <FeaturedEvents />
        <About />
        <Bento />
        <Footer />
      </div>
    </>
  );
}

export default Home;
