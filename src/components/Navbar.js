import React from "react";
import "./Navbar.css"
import airbnbLogo from "/src/image/airbnb-logo.png"
/*
!!!!! Why we should import airbnbLogo as a module first 
but cannot use src = "/src/image/airbnb-logo.png"
*/


export default function NavBar(){
    return(
        <nav className="navbar">
            <img className="airbnb-logo" src={airbnbLogo}>
            </img>
        </nav>
    )
}