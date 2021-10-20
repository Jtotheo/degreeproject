import React from 'react';
import {Router, Link} from 'react-router-dom';



const listStyle = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none"
}


export function NavLinksMLMO() {
    return (
        <nav >
            <ul> 
                <Link to= "/home" style= {listStyle}>MLMOHome</Link>
                <br />           
                <Link to= "/Act1" style= {listStyle}>MLMOAct1</Link>
                <br />
                <Link to= "/Act2" style= {listStyle}>MLMOAct2</Link>
                <br />
                <Link to= "/Act3" style= {listStyle}>MLMOAct3</Link>
                <br />
                <Link to= "/Act4" style= {listStyle}>MLMOAct4</Link>
                <br />
                <Link to= "/Act5" style= {listStyle}>MLMOAct5</Link>
                <br />
                <Link to= "/Act6" style= {listStyle}>MLMOAct6</Link>
            </ul>
        </nav>
    )
}