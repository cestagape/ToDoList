import React from 'react';
import statuses from "./data.js";
import Select from 'react-select';

class RightOne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentNote: props.currentNote,
            name: "",
            description: ""
        }
        this.saveNote = this.saveNote.bind(this)
        this.onSaveClick=this.onSaveClick.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
    }
    saveNote(event) { /*Создаю функцию по сохранению напоминалки*/
        const {name, value} = event.target
        this.props.noteUpdate(this.props.currentNote.id, event)
        this.setState({
            [name]: value
        })
    }
    onSaveClick() {
        let note = {
            name: this.state.name,
            description: this.state.description
        }
        this.setState({
            currentNote: note
        })
        this.props.saveClicked(note);
    }
    deleteNote() {
        this.props.deleteNote(this.props.currentNote.id)
    }

    render() {
        if (!!this.props.currentNote){
            return(
                <div className="right-items">
                    <div className="rightTitle">
                        <input className="inputs" type="text" name="name" placeholder="Введите название.." value={this.props.currentNote.name} onChange={this.saveNote}/>
                    </div>
                    <div className="rightDescription">
                        <input className="input-description" type="text" name="description" placeholder="Введите описание.." value={this.props.currentNote.description} onChange={this.saveNote}/>
                    </div>
                    <div className="rightDeadline">
                        <input className="inputs" type="date" name="deadline" value={this.props.currentNote.deadline} onChange={this.saveNote}/>
                    </div>
                    <button className="saveButton" onClick={this.onSaveClick}>Сохранить</button>
                    <button className="deleteButton" onClick={this.deleteNote}>Удалить</button>

                </div>
            )
        } else {
            return(
                <div className="right-items">
                    <strong className="choose-or-create">Выберите напоминание для редактирования или добавьте новое </strong>
                </div>
            )
        }
    }
}

export default RightOne;