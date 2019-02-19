import React from "react";
import "./style.css";

function InfoBot (props) {
    return (
        <div className="infoBotDiv">
            <p>Cuisine: {props.cuisine}</p>
            <p>Address: {props.address}</p>
            <p>Average price for two: ${props.price}</p>
            <p>Rating: {props.rating}</p>
        </div>
    )
}

export default InfoBot;