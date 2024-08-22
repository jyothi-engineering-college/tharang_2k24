import React from 'react';
import { Link } from 'react-router-dom';
import ThreeDModel from '../../components/Collada/ThreeDModel';

function Home() {
  return (
    <>
    <div>Welcome to tharang 24</div>
    <Link to='/events'>Go to events</Link>
    <ThreeDModel/>
    </>
  )
}

export default Home