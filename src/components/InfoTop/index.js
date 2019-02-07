import React from "react";
import "./style.css";

function InfoTop (props) {
    return (
        <div>
            <h2>Restaurant Name: {props.name}</h2>
            <p>Cuisine: {props.cuisine}</p>
        </div>
    )
}

export default InfoTop;