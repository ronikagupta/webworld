import React from 'react';
import Images from './Images/Home2.jpg'
import {NavLink} from "react-router-dom";
import './index.css';



const Common =(props)=>{
    return(
        <>
        <h1>{}
            <strong ClassName="brand-name"></strong>
        </h1>
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className="col-10 mx-auto">
                    <div className="row toprow">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5">
                        
                        <h1 className="fs-1 mt-5">
                            {props.name}<br></br> with <strong className="brand-name">New Techniques</strong>
                        </h1>
                        <h2 className="my-3">
                            We are the team of talented developer making website
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                        </div>
                    </div>
                    <div className=" ml-auto col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid animate" alt="home.png"/>
                    </div>
                    
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Common;