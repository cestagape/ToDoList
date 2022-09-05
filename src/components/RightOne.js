import React from 'react';
import statuses from "./data.js";
import Select from 'react-select';

class RightOne extends React.Component{ /*создаю классовый компонент правой части*/
    constructor(props) {
        super(props);
        this.state = { /*создаю состояние, которое включает в себя */
            currentNote: props.currentNote,
            name: "",
            description: ""
        }
        this.saveNote = this.saveNote.bind(this) /*создаю функции, привязанные к this*/
        this.onSaveClick=this.onSaveClick.bind(this) /*создаю функции, привязанные к this*/
        this.deleteNote = this.deleteNote.bind(this) /*создаю функции, привязанные к this*/
    }
    saveNote(event) { /*Создаю метод по сохранению напоминалки*/
        const {name, value} = event.target /**/
        this.props.noteUpdate(this.props.currentNote.id, event)
        this.setState({
            [name]: value
        })
    }
    onSaveClick() {
        let note = { /*создаю временную переменную для хранения в ней информации об имени и описании заметки*/
            name: this.state.name,
            description: this.state.description
        }
        this.setState({ /*в состояние заметки передаю иноформацию, которую записал в переменную "note"*/
            currentNote: note
        })
        this.props.saveClicked(note); /*Передаю состояние в корнеаой компонент*/
    }
    deleteNote() { /*метод для удаления напоминалки*/
        this.props.deleteNote(this.props.currentNote.id)/*передаю в метод id данной заметки, которую хочу удалить*/
    }

    render() { /*осуществляю рендер нижеприведенного html-кода*/
        if (!!this.props.currentNote){ /*функция "если выбрана напоминалка*/
            return(
                <div className="right-items"> /*создаю блок с элементами правой части*/
                    <div className="rightTitle"> {/*создаю блок с строкой для названия заметки*/}
                        <input className="inputs" type="text" name="name" placeholder="Введите название.." value={this.props.currentNote.name} onChange={this.saveNote}/> {/*описываю строку, присваиваю классовое для css. если строка пустая, то в ней будет написано "введите название..". Значение, находящиеся в строке, принадлежит выбранной заметке. При изменениях в строке заметка автоматически сохраняется, это можно увидеть в левой части toDo листа*/}
                    </div>
                    <div className="rightDescription"> {/*создаю блок под описание заметки*/}
                        <input className="input-description" type="text" name="description" placeholder="Введите описание.." value={this.props.currentNote.description} onChange={this.saveNote}/> {/*принцип работы этой строчки полностью повторяет предыудущий, однако тут это сделано для описания*/}
                    </div>
                    <div className="rightDeadline"> {/*создаю блок для выбора Дэдлайна*/}
                        <input className="inputs" type="date" name="deadline" value={this.props.currentNote.deadline} onChange={this.saveNote}/> {/*в данном блоке описал ввод даты дэдлайна*/}
                    </div>
                    <button className="saveButton" onClick={this.onSaveClick}>Сохранить</button> {/*создаю кнопку для сохранения заметки*/}
                    <button className="deleteButton" onClick={this.deleteNote}>Удалить</button> {/*создаю кнопку для удаления заметки*/}
                </div>
            )
        } else {/*если напоминалка не выбрана, в правой части выводиться фраза следующая фраза...*/
            return(
                <div className="right-items">
                    <strong className="choose-or-create">Выберите напоминание для редактирования или добавьте новое </strong>
                </div>
            )
        }
    }
}

export default RightOne; /*экспортирую весь класс, описаный выше*/