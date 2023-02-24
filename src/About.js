import React, { lazy, Suspense } from 'react';
import Logo from './Logo';
import Shimmer from './Shimmer';
//import Profile from "./Profile";

const Profile = lazy(()=>import("./Profile"));


const About = () => {
  return (
    <div>
        <h1>About Us</h1>
        <p>This is about Food Villa </p>
        <Logo />
        <Suspense>
        <Profile profileData="This is testing class component" secondParm="hi" fallback={<Shimmer />} />
        </Suspense>
      
    </div>
  )
}

export default About
