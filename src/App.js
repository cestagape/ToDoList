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
                isNew: true
            }
            upd.push(currNote)
            console.log(currNote)
            return {
                notesData: upd,
                currentNote: currNote
            }
        })

    }
    onNoteChanged(note) {
        console.log("fromcallback:")
        note.id=this.state.currentNote.id
        note.isNew=false
        this.setState(prevState => {
            let upd = prevState.notesData
            upd.pop()
            upd.push(note)
            console.log(upd)
            return {
                notesData: upd,
                currentNote: null
            }
        })
    }
    onNoteSelected(id){
        this.setState(prevState=>{
            let upd = prevState.currentNote
            upd = this.state.notesData.filter(note=>note.id===id)
            console.log(upd)
            return {
                notesData: this.state.notesData,
                currentNote: upd[0]
            }
        })
   }

        render() {
            let noteComponent = this.state.notesData.map(item => <LeftOne key={item.id} note={item} selectNote={this.onNoteSelected.bind(this)}/>)
            console.log(noteComponent)
            return (
                <div className="container">
                    <div className="left">
                        <button className="createNewTaskButton" onClick={this.newNote}>+</button>
                        {noteComponent}
                    </div>
                    <div className="right">
                        <RightOne key={this.state.notesData.length} currentNote={this.state.currentNote} callback={this.onNoteChanged.bind(this)}/>
                    </div>
                </div>
            );
        }
    }
 export default App;

