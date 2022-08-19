import React from 'react';

function RightOne() {
    return(
        <div className="right-items">
            <div className="rightTitle">
                <input type="text" name="rightTitle" placeholder="Введите название.."/>
            </div>
            <div classname="rightDescription">
                <input type="text" name="rightDescription" placeholder="Введите описание.."/>
            </div>
            <div className="rightDeadline">
                <input type="date" name="rightDeadline"/>
            </div>
            </div>
    )}

export default RightOne;