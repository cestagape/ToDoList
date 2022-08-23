import React from "react";
import LeftOne from "./components/LeftOne";
import RightOne from "./components/RightOne";
import "./components/styles/styles.css"
import notes from "./components/data.js"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesData: notes,
            currentNote: null
        }
        this.newNote = this.newNote.bind(this)
        this.onNoteChanged = this.onNoteChanged.bind(this)
    }

    newNote() {
        this.setState(prevState => {
            let upd = prevState.notesData
            let currNote = {
                id: prevState.notesData.length,
                name: "",
                description: "",
                isChecked: false,
                isNew: true,
                deadline: new Date()
            }
            upd.push(currNote)
            return {
                notesData: upd,
                currentNote: currNote
            }
        })

    }
    onNoteChanged(note) {
        if (note.isNew) {
            note.id=this.state.currentNote.id
            note.isNew=false
            this.setState(prevState => {
                let upd = prevState.notesData
                upd.pop()
                upd.push(note)
                return {
                    notesData: upd,
                    currentNote: null
                }
            })
        } else {
            this.setState({
                currentNote: null
            })
        }
    }
    onNoteSelected(id){
        this.setState(prevState => {
            let upd = prevState.currentNote
            upd = this.state.notesData.filter(note=>note.id === id)
            return {
                notesData: this.state.notesData,
                currentNote: upd[0]
            }
        })
   }
   onNoteUpdate(id, event) {
       const {name, value} = event.target
       if (!(name&&value)) {
           return
       }
       this.setState(prevState => {
           let upd = prevState.notesData.filter(note=>note.id === id)[0]
           upd[name] = value
           return {
               currentNote: upd
           }
       })
   }
   onNoteDelete(id) {
        this.setState(prevState=>{
            let upd = prevState.notesData.filter(el => el.id !== id)
            return {
                notesData: upd,
                currentNote: null
            }
        })
   }
        render() {
            let noteComponent = this.state.notesData.map(item => <LeftOne key={item.id} note={item} selectNote={this.onNoteSelected.bind(this)}/>)
            return (
                <div className="container">
                    <div className="left">
                        <strong className="main-label">Список дел</strong>
                        <button className="createNewTaskButton" onClick={this.newNote}>+</button>
                        {noteComponent}
                    </div>
                    <div className="right">
                        <RightOne
                            key={this.state.currentNote ? this.state.currentNote.id : -1}
                            currentNote={this.state.currentNote}
                            saveClicked={this.onNoteChanged.bind(this)}
                            noteUpdate={this.onNoteUpdate.bind(this)}
                            deleteNote={this.onNoteDelete.bind(this)}
                        />
                    </div>
                </div>
            );
        }
    }
 export default App;

