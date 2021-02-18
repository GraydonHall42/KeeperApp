import React from "react";

//import our components
import Header from "./Header.jsx"
import Note from "./Note.jsx"
import Footer from "./Footer.jsx"


//function to render all of our components together. 
function App(){
    return(
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;