import React from 'react';
import {Router, Link} from 'react-router-dom';
import { NavLinks } from './NavLinks';



const listStyle = {
    display: "block",
    color: "black",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none"
}


export function CategoryGrid() {
    return (
      <NavLinks />

      // <div>Natur och Friluftsliv</div>

        // <nav >
        //     <ul> 
            
        //         <br />           
        //         <Link to= "/Act1" style= {listStyle}>Act1</Link>
        //         <br />
        //         <Link to= "/Act2" style= {listStyle}>Act2</Link>
        //         <br />
        //         <Link to= "/Act3" style= {listStyle}>Act3</Link>
        //         <br />
        //         <Link to= "/Act4" style= {listStyle}>Act4</Link>
        //         <br />
        //         <Link to= "/Act5" style= {listStyle}>Act5</Link>
        //         <br />
        //         <Link to= "/Act6" style= {listStyle}>Act6</Link>
        //     </ul>
        // </nav>
        // <div>hej</div>
      
    )
}