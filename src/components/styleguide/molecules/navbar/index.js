import React,{useState} from 'react';
import Logo from "./Logo"
import Menu from "./Menu"
import Spacing from '../../atoms/spacing';
import NavbarIcon from '../../atoms/navbarIcon';
import { useScreen } from '../../../../contexts/Screen';
import Nav from './styles'
const spacing = new Spacing(7,'16px','10vw')

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
