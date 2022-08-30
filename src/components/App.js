import React from "react";
import NavBar from "./Navbar";
import Hero from "./Hero"
import Card from "./Card"

import katiePhoto from "/src/image/katie.png"
import data from "/src/components/data"


import "./App.css"

export default function App(){
    

    const cards = data.map((card) => {
        const photo = Object.values(card.coverImg);
        return <Card 
                key = {card.id}
                img ={photo}
                rating = {card.stats.rating}
                commentNumber = {card.stats.reviewCount}
                nationality ={card.location}
                activityTitle = {card.title}
                location = {card.location}
                price = {card.price}
                openSpots = {card.openSpots}
                 />
    })
    return(
        <div>
        <NavBar/>
        <Hero/>
        <div className="cards">
        {cards}
        </div>
       </div>
    )
}