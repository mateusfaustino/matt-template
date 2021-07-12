import React,{useState} from 'react';
import { FaBars} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Logo from "./Logo"
import Menu from "./Menu"
import styled from 'styled-components';
import Spacing from '../../atoms/spacing';
import NavbarIcon from '../../atoms/navbarIcon';
import { useScreen } from '../../../../contexts/Screen';
import { palette } from '../../atoms/colors';
const spacing = new Spacing(7,'16px','10vw')

const Nav= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:4px ${spacing.margin};
    right:0;
    transition:1s;
    background:${palette.primary.main};
    z-index:10000;
    position:fixed;
    top:0;
    width:100%;
    transform: translateY(${props=>props.isDisplayed?`0`:'-40px'});

`
const Navbar = (props) => {
    const {scrollDirection} = useScreen()
    const [isActive,setIsActive]=useState(false);
    return (
        
            <Nav
            isDisplayed={
                isActive ? true : scrollDirection=='up'? true : scrollDirection=='down'?false:true
            }
            >
                <Logo isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <Menu appLinks={props.appLinks} isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <NavbarIcon close={isActive} onClick={()=>setIsActive(!isActive)}/>
            </Nav>
        
    )
}

export default Navbar
