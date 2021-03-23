import React from 'react'
import Images from './Images/Home2.jpg'
import {NavLink} from "react-router-dom";
import './index.css';
import Common from "./Common"

const Home =()=>{
    return(
        <>
       <Common name='Grow your bussiness with' imgsrc="https://winlancers.com/images/abt.gif" visit='/contact' btname="Get Started"/>
    </>
    );
};

export default Home;