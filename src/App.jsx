import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route ,Switch} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import "./index.css"
const App =()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact  path="/" component={Home}/>
            <Route exact  path="/about" component={About}/>
            <Route exact  path="/services" component={Services}/>
            <Route exact  path="/contact" component={Contact}/>
        </Switch>
        <Redirect to="/"/>
       
        </>
    );
};

export default App;