import React from 'react';
import {Router, Link} from 'react-router-dom';



const listStyle = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none"
}


export function NavLinksSTHLM() {
    return (
        <nav >
            <ul> 
                <Link to= "/home" style= {listStyle}>STHLMHome</Link>
                <br />           
                <Link to= "/Act1" style= {listStyle}>STHLMAct1</Link>
                <br />
                <Link to= "/Act2" style= {listStyle}>STHLMAct2</Link>
                <br />
                <Link to= "/Act3" style= {listStyle}>STHLMAct3</Link>
                <br />
                <Link to= "/Act4" style= {listStyle}>STHLMAct4</Link>
                <br />
                <Link to= "/Act5" style= {listStyle}>STHLMAct5</Link>
                <br />
                <Link to= "/Act6" style= {listStyle}>STHLMAct6</Link>
            </ul>
        </nav>
    )
}