import React from 'react';
import "./styles/styles.css";
import notes from "./data.js"

function LeftOne(props) {
    const notesElements = notes.map(item =>  <div className="bar">
        <input type="checkbox" key={item.id} checked={item.isChecked}/>
        <label>{item.name}</label>
    </div>
    )
    return(
        <div className="bar-items">
            {notesElements}
        </div>
    )}
export default LeftOne;