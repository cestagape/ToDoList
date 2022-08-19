import React from 'react';

function RightOne() {
    return(
        <div className="right-items">
            <div className="rightTitle">
                <input className="inputs" type="text" name="rightTitle" placeholder="Введите название.."/>
            </div>
            <div className="rightDescription">
                <input className="input-description" type="text" name="rightDescription" placeholder="Введите описание.."/>
            </div>
            <div className="rightDeadline">
                <input className="inputs" type="date" name="rightDeadline"/>
            </div>
        </div>
    )}

export default RightOne;