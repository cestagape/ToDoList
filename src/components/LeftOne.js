import React from 'react';
import "./styles/styles.css";

function LeftOne(props) { /*создаю функциональный компонент*/
    return( /*вывод */
        <div className="bar-items"> {/*Описываю блок напоминалок слева*/}
            <button className="barButton" onClick={()=>props.selectNote(props.note.id)}> {/*Делаю напоминалку кликабельной*/}
                <div className="bar"> {/*Описываю блок напоминалки*/}
                    <input type="checkbox" key={props.note.id} defaultChecked={props.note.isChecked}/> {/*Создаю галочку для контроля выполнения, передаюв переменную "key" идентификационный номер заметки и завершена ли задача в перменную "defaultChecked"*/}
                    <strong> {props.note.name}</strong> {/*Отображаю название напоминалки из свойств объъекта*/}
                    <div className="leftDescription"> {/*Описываю блок с описанием заметки*/}
                        {props.note.description} {/*отображаю описание заметки*/}
                    </div>

                    </div>
            </button>
        </div>
    )}

export default LeftOne