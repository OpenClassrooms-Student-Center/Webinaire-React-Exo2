import React from "react";

export function Place(props) {
    return (<li key={props.name}>{props.name} ({props.indoor ? "en intérieur" : "en extérieur"})</li>);
}