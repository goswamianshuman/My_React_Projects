import React from "react";
import {
  Sidebarcontainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLinks,
  SidebarMenu,
  SidebarRoute,
  SidebarBtnWrap,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Sidebarcontainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="Home">Home</SidebarLinks>
          <SidebarLinks to="projects">Projects</SidebarLinks>
          <SidebarLinks to="Services">Services</SidebarLinks>
          <SidebarLinks to="about">About</SidebarLinks>
          <SidebarLinks to="signup">Sign up</SidebarLinks>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </Sidebarcontainer>
  );
};

export default Sidebar;
