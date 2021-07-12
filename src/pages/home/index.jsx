import React,{useEffect, useState, useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Container from './styles'

const Home = () => {
    const {user} = useContext(AuthContext)
    return(
        <Container>
            Hello world
        </Container>
    )
}
export default Home