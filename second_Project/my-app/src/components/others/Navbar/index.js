import React,{useState,useEffect} from "react"; 
import {FaBars} from 'react-icons/fa'
import { Button } from "../ButtonElements";

import {
  Nav,
  NavContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks, 
  NavbarBtnWrapper
} from "./NavElements";
const Navbar = ({toggle}) => { 

  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)
  } 

  const[ScrollNav, setScrollNav] = useState(false) 

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else {
      setScrollNav(false)
    } 
  } 

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <Nav ScrollNav={ScrollNav}>
        <NavContainer>
          <Navlogo to="/">AGP</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="Home">Home</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="Services">Services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="signup">Sign up</NavLinks>
            </NavItems>
          </NavMenu>  
          
          <NavbarBtnWrapper>
          <Button to="signin" onMouseEnter={onHover} onMouseLeave={onHover} 
          primary="true"
          dark="true" >
            SignIn
          </Button>
          </NavbarBtnWrapper>

        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
