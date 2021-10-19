import React from 'react';
import {Router, Link} from 'react-router-dom';



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
            <ul> 
                <Link to= "/home" style= {listStyle}>Home</Link>
                <br />           
                <Link to= "/Act1" style= {listStyle}>Act1</Link>
                <br />
                <Link to= "/Act2" style= {listStyle}>Act2</Link>
                <br />
                <Link to= "/Act3" style= {listStyle}>Act3</Link>
                <br />
                <Link to= "/Act4" style= {listStyle}>Act4</Link>
                <br />
                <Link to= "/Act5" style= {listStyle}>Act5</Link>
                <br />
                <Link to= "/Act6" style= {listStyle}>Act6</Link>
            </ul>
        </nav>
    )
}