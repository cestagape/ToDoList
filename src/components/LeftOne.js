import React from 'react';
import "./styles/styles.css";

function LeftOne(props) {
    return(
        <div className="bar-items">
            <button className="barButton" /*onClick={showNote()*/>
                <div className="bar">
                    <input type="checkbox" key={props.note.id} defaultChecked={props.note.isChecked}/>
                    <strong> {props.note.name}</strong>
                    <div className="leftDescription">
                        {props.note.description}
                    </div>
                    </div>
            </button>
        </div>
    )}


export default LeftOne