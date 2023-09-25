import React from "react";

function Card(props){
    return(
        <div className="term">
          <dt>
            <span 
            className="emoji" 
            role="img" 
            aria-label="Tense Biceps">
            {props.imo}
            </span>
            <span>
              {props.heading}
              </span>
          </dt>
          <dd>
            {props.description}
          </dd>
        </div>
    )
}

export default Card;