import React,{useState} from 'react';
import Logo from "./Logo"
import Menu from "./Menu/index"
import Spacing from '../../atoms/spacing';
import NavbarIcon from '../../atoms/navbarIcon';
import { useScreen } from '../../../../contexts/Screen';
import Nav,{NavWrapper} from './styles'
import { useSpacing } from '../../../../contexts/SpacingContext';


const Navbar = (props) => {
    const {scrollDirection} = useScreen()
    const [isActive,setIsActive]=useState(false);
    const {spacing} = useSpacing()
    return (
        <NavWrapper 
            spacing={spacing}
            isActive={isActive} 
            isDisplayed={
                isActive ? true : scrollDirection=='up'? true : scrollDirection=='down'?false:true
        }>
            <Nav>
                <Logo isActive={isActive}/>
                <Menu isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <NavbarIcon close={isActive} onClick={()=>setIsActive(!isActive)}/>
            </Nav>
        </NavWrapper>
            
        
    )
}

export default Navbar
