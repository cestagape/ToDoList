import React from "react";
import LeftOne from "./components/LeftOne";
import RightOne from "./components/RightOne";
import "./components/styles/styles.css";
import notes from "./components/data.js";
import statuses from "./components/data.js";

class App extends React.Component { /*создаю корневой классовый компонент*/
    constructor(props) {
        super(props);
        this.state = { /*описываю состояние при первоначальной отрисовке*/
            notesData: notes, /*Местом, откуда брать данные, указываю массив объектов notes */
            currentNote: null,  /*При запуске никакая из заметок не будет выбрана*/
            search: "" /*строка поиска пуста*/
        }
        this.newNote = this.newNote.bind(this) /*создаю функции, привязанные к this, то есть функции, которые меняют состояние именно этого компонента*/
        this.onNoteChanged = this.onNoteChanged.bind(this) /*создаю функции, привязанные к this*/
        this.noteSearch = this.noteSearch.bind(this) /*создаю функции, привязанные к this*/
    }

    newNote() { /*метод по созданию новой напоминалки*/
        this.setState(prevState => { /*меняю сотояние*/
            let upd = prevState.notesData /*создаю переменную, в которую загружаю предыдущее состояние*/
            let currNote = { /*создаю переменную, в которой хранится информация о полях напоминалки. При создании никакая информация не заполнена и галочка в чекбоксе отсутсвует*/
                id: prevState.notesData.length, /*напоминалке присваивается id по принципу длины массива с напоминалками. Массив с объектами находится в файле data.js*/
                name: "",
                description: "",
                isChecked: false,
                isNew: true,
                deadline: new Date()
            }
            upd.push(currNote) /*добавляю новую напоминалку в общий массив*/
            return {
                notesData: upd, /*вывожу новый массив, в котором есть новая новая напоминалка*/
                currentNote: currNote /*в выводе выбранной заметкой будет та, которую я только что добавил*/
            }
        })

    }

    onNoteChanged(note) { /*метод, работающий при изменении заметки*/
        if (note.isNew) { /*Проверяет является ли напоминалка только что созданной*/
            note.id=this.state.currentNote.id /*указываю, с какой напоминалкой я буду работать через id*/
            note.isNew=false /*меняет статус напоминалку на "не новая"*/
            this.setState(prevState => { /*меняю состояние напоминалки*/
                let upd = prevState.notesData /*создаю временную переменную, в которой храню предыдущее значение напоминалки*/
                upd.pop() /*удаляю последний элемент массива всех напоминалок*/
                upd.push(note) /*добавляю новую напоминалку в массив*/
                return { /*вывод*/
                    notesData: upd, /*вывожу новый массив напоминалок*/
                    currentNote: null /*в выводе напоминалка выбрана не будет*/
                }
            })
        } else {
            this.setState({ /*меняю состояние*/
                currentNote: null /*в выводе напоминалка выбрана не будет*/
            })
        }
    }
    onNoteSelected(id) {
        this.setState(prevState => {
            let upd = prevState.currentNote /*создаю временную переменную, в которой храню предыдущее значение напоминалки*/
            upd = this.state.notesData.filter(note=>note.id === id) /**/
            return {
                notesData: this.state.notesData,
                search: this.state.search,
                currentNote: upd[0] /*будет выбран первый элемент массива новых напоминалок*/
            }
        })
   }
   onNoteUpdate(id, event) {
       const {name, value} = event.target
       if (!(name&&value)) { /*если name или value null, то метод уходит из функции*/
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
   noteSearch(event) { /*метод по поиску напоминалок*/
        const {name, value} = event.target
        this.setState({[name]: value}) /**/
        this.setState(prevState=> {
           let upd = prevState.notesData.filter(el => el.name.includes(this.state.search)) /*логика поиска.*/
            console.log(upd);
             return {
               notesData: upd
           }
       })
   }
   onNoteDelete(id) { /*СОЗДАЮ ФУНКЦИЮ ДЛЯ УДАЛЕНИЯ НАПОМИНАНИЙ*/
        this.setState(prevState=>{
            let upd = prevState.notesData.filter(el => el.id !== id) /*фильтруй так, что бы каждый элемент не ровнялся тому, что ты ввел*/
            return {
                notesData: upd,
                currentNote: null /*в выводе напоминалка выбрана не будет*/
            }
        })
   }
        render() { /*Вывод*/
            let noteComponent = this.state.notesData.map(item => <LeftOne key={item.id} note={item} selectNote={this.onNoteSelected.bind(this)}/>)
            return (
                <div className="container"> {/*описываю оборачивающий блок, блок, уже внутри которого будут площадь будет поделена между правым компонентом и левым компонентом*/}
                    <div className="left"> {/*описываю левый компонент*/}
                        <button className="createNewTaskButton" onClick={this.newNote}>+</button> {/*создаю кнопку для добавления новой заметки*/}
                        <input className="searchInput" type="text" name="search" value={this.state.search} onChange={this.noteSearch}></input> {/*создаю поисковую строку, которая делает запрос в сразу при наборе*/}
                        {noteComponent}
                    </div>
                    <div className="right">
                        <RightOne
                            key={this.state.currentNote ? this.state.currentNote.id : -1} /*реализовал тернарный оператор, цель которого определять выбрана ли напоминалка, иначе никакой из методов в RightOne не будет работать*/
                            currentNote={this.state.currentNote}  /*передаю функцию в RightOne.js*/
                            saveClicked={this.onNoteChanged.bind(this)} /*передаю функцию в RightOne.js*/
                            noteUpdate={this.onNoteUpdate.bind(this)} /*передаю функцию в RightOne.js*/
                            deleteNote={this.onNoteDelete.bind(this)} /*передаю функцию в RightOne.js*/
                        />
                    </div>
                </div>
            );
        }
    }
 export default App;

