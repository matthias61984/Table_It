import React from "react";
import "./style.css";

function InfoTop (props) {
    return (
        <div className="offset-md-3 col-md-6 infoTopDiv">
            <h2 className="text-center">{props.name}</h2>
        </div>
    )
}

export default InfoTop;