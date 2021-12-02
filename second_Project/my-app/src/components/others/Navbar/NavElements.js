import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll' 

export const Nav = styled.nav`
    background: ${({ScrollNav}) => (ScrollNav ? "#212121" : "transparent")};
    height: 70px;
    margin-top: -10px;
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky; 
    top: 4;
    z-index: 10;

    @media screen and (max-width: 920px) {
        transition: 0.8s all ease;
    }  
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 200%;
    padding: 0 24px; 
    max-width: 1100px;


` 
export const Navlogo = styled(LinkR)`
    color: white;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex; 
    font-family: arial;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

` 

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute; 
        color: white; 
        margin-top: 25px; 
        margin-right: 25px;
        /* top: 0; */
        right: 0; 
        align-items: center;
        font-size: 1.8rem;
        cursor: pointer;
    }
` 

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: 0; */ 
    margin-left: -35px;


    @media screen and (max-width: 760px){
        display:none;
    } 
    

` 

export const NavItems = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center; 
    font-family: arial;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid orangered;
    } 

    &:hover {
        transition: all 0.3s ease-in-out; 
        color: orange;
    }

` 

export const NavbarBtnWrapper =styled.div`
    align-items: center;  
    margin-top: 18px;  

    @media screen and (max-width: 760px){
        display: none;
    }
    
`