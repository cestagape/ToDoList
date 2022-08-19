import React from 'react';
import "./styles/styles.css";

function LeftOne() {
    return(
        <div className="bar-items">
            <div className="bar">
                <input type="checkbox" />
                <label>Первая напоминалка</label>
            </div>
            <div className="bar">
                <input type="checkbox"/>
                <label>Вторая напоминалка</label>
            </div>
            <div className="bar">
                <input type="checkbox"/>
                <label>Третья напоминалка</label>
            </div>
        </div>
    )}
export default LeftOne;