import React from "react";
import "./Card.css"

import redStar from "/src/image/red-star.png"

export default function Card(props){
   return (

      <section className="data-driven-card">
         <div className="data-driven-card-component" >

            <img className="card-photo" src={props.img}/>

            <div className="card-status">
               <img className="red-star" src = {redStar}/>

               <span>{props.rating}</span>
               <span className="gray"> ({props.commentNumber})</span>
               <span className="gray">{props.nationality}</span>
            </div>

            <p className="activity-name">{props.activityTitle} </p>
            <p className= "price"><span className="bold">From ${props.price}</span>/ person</p>


         </div>
      </section>

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