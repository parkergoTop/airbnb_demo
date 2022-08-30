import React from "react";
import "./Hero.css";

import heroDisplay from "/src/image/hero-display.png"


export default function Hero(){
   
    return(
        <section className="hero">
        <div className="images-display "></div>
        <div className="online-experience">
            <img src={heroDisplay} className="hero-display"></img>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-info">Join Unique interactive activities led by one-of-a-kind hosts wihout 
                leaving home
            </p>
        </div>
           
        </section>
    
    )
}