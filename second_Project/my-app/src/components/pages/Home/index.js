import React, {useState} from 'react'
import HeroSection from '../../others/HeroSection';
import InfoSection from '../../others/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree } from '../../others/InfoSection/Data';
import Navbar from '../../others/Navbar'
import Sidebar from '../../others/Sidebar' 
import Services from '../../others/Services'
import Footer from '../../others/Footer';

const Home = () => { 
    const [isOpen , setIsOpen] = useState(false); 

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} /> 
         <HeroSection /> 
         <InfoSection {...homeObjOne}/> 
         <InfoSection {...homeObjTwo}/> 
         <Services/>
         <InfoSection {...homeObjThree}/>  
         <Footer/>
         
        </>
    )
};

export default Home
