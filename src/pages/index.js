import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';


const Home = () => {
  const[isOpen, setIsOpen] = useState(false);
  
  const toggle = () =>{
      setIsOpen(!isOpen);
  };

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree} />
        <Services />
        <Footer />
    </>
  );
};

export default Home;