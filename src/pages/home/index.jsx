import React,{useEffect, useState, useContext} from "react";
import Container from './styles'
import Brand from './brand/index'
import SocialBar from './SocialBar'

const Home = () => {
    return(
        <Container>
            <Brand/>
            <SocialBar/>
        </Container>
    )
}
export default Home