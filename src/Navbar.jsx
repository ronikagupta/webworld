import React from "react";
import {NavLink,Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                
                <div className="row">
                    <div className="col-12 mx-auto">

                    <div className="col-lg-12">
                        <div className="">
                            <div className="card-body">

                                {/* <h4 className="mt-0 header-title">Pills</h4> */}
                                {/* <p className="text-muted m-b-30 font-14">Take that same HTML, but use <code className="highlighter-rouge">.nav-pills</code> instead:</p> */}

                                <ul className="nav nav-pills justify-content-end">
                                    <li className="nav-item mr-4">
                                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item mr-4">
                                        <NavLink className="nav-link" to="/About">About</NavLink>
                                    </li>
                                    <li className="nav-item mr-4">
                                        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item mr-4">
                                        <NavLink className="nav-link " to="/Services">Serveice</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;
