import React,{useEffect, useState, useContext} from "react";
import Logo from "../../components/styleguide/molecules/navbar/Logo";
import { AuthContext } from "../../contexts/AuthContext";
import Container from './styles'
import Brand from './brand/index'


const Home = () => {
    const {user} = useContext(AuthContext)
    return(
        <Container>
            <Brand/>
        </Container>
    )
}
export default Home