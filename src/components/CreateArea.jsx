import React from "react";

function CreateArea(props) {

  //create state variable as an object
  const [note, setNote] = React.useState({
    title: "",
    body: ""
  });


  function addNote(event) {
    let newNote = {
      title: note.title,
      body: note.body
    };
    props.addNote(newNote) //call addNote() in app.jsx
    setNote({
      title: "",
      body: ""
    });
    event.preventDefault(); //prevent refresh
  }

  function handleChange(event) {
    //deconstruct event.target object
    const {name, value} = event.target
    setNote((prevNote)=>{
      return {...prevNote,
      [name]: value} //name of element matches name of property
    });
  }


  return (<div>
    <form>
      <input value={note.title} onChange={handleChange} name="title" placeholder="Title"/>
      <textarea value={note.body} onChange={handleChange} name="body" placeholder="Take a note..." rows="3"/>
      <button onClick={addNote}>Add</button>
    </form>
  </div>);
}

export default CreateArea;
