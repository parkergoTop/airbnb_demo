import React from "react";
import "./Card.css"

import redStar from "/src/image/red-star.png"

/*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */
export default function Card(props){
   let badgeText;
   if (props.card.openSpots ===0){
      badgeText ="SOLD OUT";
   }else if(props.card.location === "Online"){
      badgeText = "Online"
   }

   const photo = Object.values(props.card.coverImg);

   return (
       // why use ===
         <div className="data-driven-card" >
            {badgeText && <div className="sold-out">{badgeText}</div>}
            <img className="card-photo" src={photo}/>

            <div className="card-status">
               <img className="red-star" src = {redStar}/>

               <span>{props.card.stats.rating}</span>
               <span className="gray"> ({props.card.stats.reviewCount})</span>
               <span className="gray">{props.card.location}</span>
            </div>

            <p className="activity-name">{props.card.title} </p>
            <p className= "price"><span className="bold">From ${props.card.price}</span>/ person</p>


         </div>
      

      /*
    <section className="data-driven-card">
       <div className="data-driven-card-component" >
        <img className="card-photo" src={katiePhoto}/>

        <div className="card-status">
          <img className="red-star" src = {redStar}/>
          <span>5.0</span>
          <span className="gray"> (6) </span>
          <span className="gray">USA</span>
        </div>
        <p className="activity-name">Life Lessons with Katie Zaferes </p>
        <p className= "price"><span className="bold">From $136</span>/ person</p>
       </div>

    </section>
    */
   )
       
    
   
}