import React from 'react';
import software from './Images/software.jpg';
import {NavLink} from "react-router-dom";
import './index.css';
import Common from "./Common"


const About =()=>{
    return(
        <>
       <Common name='Welcome to about page' imgsrc="https://www.makronet.com/wp-content/uploads/2020/04/cloud_computing.gif" visit='/contact' btname="Contact Now"/>
        </>
    );
};

export default About;