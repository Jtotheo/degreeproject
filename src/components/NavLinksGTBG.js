import React from 'react';
import {Router, Link} from 'react-router-dom';



const listStyle = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none"
}


export function NavLinksGTBG() {
    return (
        <nav >
            <ul> 
                <Link to= "/home" style= {listStyle}>GTBGHome</Link>
                <br />           
                <Link to= "/Act1" style= {listStyle}>GTBGAct1</Link>
                <br />
                <Link to= "/Act2" style= {listStyle}>GTBGAct2</Link>
                <br />
                <Link to= "/Act3" style= {listStyle}>GTBGAct3</Link>
                <br />
                <Link to= "/Act4" style= {listStyle}>GTBGAct4</Link>
                <br />
                <Link to= "/Act5" style= {listStyle}>GTBGAct5</Link>
                <br />
                <Link to= "/Act6" style= {listStyle}>GTBGAct6</Link>
            </ul>
        </nav>
    )
}