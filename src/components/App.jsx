import React from "react";
import Header from "./Header.jsx"
import NoteCard from "./Note.jsx"
import Footer from "./Footer.jsx"
import Notes from "../notes.js"


function createNote(Note){
    return (
        <NoteCard 
            key = {Note.key}
            title = {Note.title}
            content = {Note.content}
        />
    );
}


//function to render all of our components together. 
function App(){
    return(
        <div>
            <Header />
            {Notes.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;