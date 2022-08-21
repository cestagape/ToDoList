import React from 'react';
import "./styles/styles.css";

function LeftOne(props) {
    return(
        <div className="bar-items">

            <div className="bar">
                <input type="checkbox" key={props.note.id} defaultChecked={props.note.isChecked}/>
                <label>{props.note.name}</label>
            </div>

        </div>
    )}
export default LeftOne