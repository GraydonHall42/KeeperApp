import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //need an array of note objects
  const [notes, setNotes] = React.useState([])

  //called from CreateArea component
  //add note to our notes array
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        newNote
      ]
    })
  }

  //called from Note component
  //delete note based on its index
  function deleteNote(index) {
    setNotes((prevNotes) => {
      let newArray = [...prevNotes]
      newArray.splice(index, 1)
      return newArray
    })
  }

  function createNote(note, index) {
    return (<Note key={index} id={index} title={note.title} body={note.body} deleteNote={deleteNote}/>)
  }

  return (<div>
    <Header/>
    <CreateArea addNote={addNote}/> {notes.map(createNote)}
    <Footer/>
  </div>);
}

export default App;
