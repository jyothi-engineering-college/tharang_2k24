import React from 'react';
import { Link } from 'react-router-dom';
import ThreeDModel from '../../components/Collada/ThreeDModel';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Navbar from '../../components/Navbar/Navbar';
import './home.css';
import DateStrip from '../../components/DateStrip/DateStrip';

function Home() {
  return (
    <>
    <div className="veed">
    <Navbar/>
    <Header/>
    <DateStrip/>
    <About/>
    </div></>
  )
}

export default Home