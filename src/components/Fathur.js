import React from 'react';
import "./fathur.css";
const Fathur = (props) => {
    return (
        <div className="fathur">
            <img src="./images/logo.png" className="photo" alt=""/> 
            <p className ="title">{props.title}</p>
            <p className ="NIM"> {props.nim} </p>
            <p className ="asal"> {props.asal} </p>
        </div>
    );
}

 
export default Fathur