import React from 'react';
import {Router, Link} from 'react-router-dom';


const ul= {listStyleType: "none",
width: "100vw",
maxWidth: "100%",
margin: "0",
padding: "0",
overflow: "hidden",
backgroundColor: "black",
display: "flex",

}

const listStyle = {
    display: "block",
    color: "white",
  textAlign: "center",
  padding: "16px",
  textDecoration: "none"
}


export function NavLinks() {
    return (
        <nav >
            <ul style= {ul}> 
                <Link to= "/" style= {listStyle}>Home</Link>
                <br />           
                <Link to= "/Act1" style= {listStyle}>Act1</Link>
                <br />
                <Link to= "/Act2" style= {listStyle}>Act2</Link>
                <br />
                <Link to= "/Act3" style= {listStyle}>Act3</Link>
                <br />
                <Link to= "/Act4" style= {listStyle}>Act4</Link>
                
                
            </ul>
        </nav>
    )
}