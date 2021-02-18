import React from "react";

function Footer(){
    //return currrent year
    var year = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    );
}

export default Footer;