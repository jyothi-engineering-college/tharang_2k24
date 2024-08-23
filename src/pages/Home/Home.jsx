import React from 'react';
import { Link } from 'react-router-dom';
import ThreeDModel from '../../components/Collada/ThreeDModel';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';
import DateStrip from '../../components/DateStrip/DateStrip';
import Bento from '../../components/Bento/Bento';

function Home() {
  return (
    <>
    <div className="veed">
    <Navbar/>
    <Header/>
    <DateStrip/>
    <About/>
    <Bento/>
    </div></>
  )
}

export default Home