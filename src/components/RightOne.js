import React from 'react';

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
    }
    saveNote(event) {
        const {name, value} = event.target
        console.log(name+"-"+ value)
        this.setState({
            [name]: value
        })
        console.log(this.state.name)
    }
    onSaveClick() {
        let note = {
            name: this.state.name,
            description: this.state.description
        }
        console.log(note)
        this.setState({
            currentNote: note
        })
        this.props.callback(note);
    }
    render() {
        if (!!this.props.currentNote){
            return(
                <div className="right-items">
                    <div className="rightTitle">
                        <input className="inputs" type="text" name="name" placeholder="Введите название.." value={this.state.name} onChange={this.saveNote}/>
                    </div>
                    <div className="rightDescription">
                        <input className="input-description" type="text" name="description" placeholder="Введите описание.." value={this.state.description} onChange={this.saveNote}/>
                    </div>
                    <div className="rightDeadline">
                        <input className="inputs" type="date" name="rightDeadline"/>
                    </div>
                    <button className="saveButton" onClick={this.onSaveClick}>Сохранить</button>
                </div>
            )
        } else {
            return(
                <div className="right-items">
                    <label></label>
                </div>
            )
        }
    }
    // showNote() {
    // }
}

export default RightOne;