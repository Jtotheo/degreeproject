import React from 'react';
import {Router, Link} from 'react-router-dom';
import { NavLinks } from './NavLinks';
import {THGtbg } from './THGtbg';
import {NFGtbg } from './NFGtbg';
import {MDGtbg } from './MDGtbg';
import {BFGtbg } from './BFGtbg';
import {KNGtbg } from './KNGtbg';
import {OvrigtGtbg } from './OvrigtGtbg';



const listStyle = {
    display: "block",
    color: "black",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none"
}


export function CategoryGridGTBG() {
    return (

        <div>
        <NavLinks />
        <div className="category-cards">
        <Link to= "/categories/gbg/akt" className="category-card" style= {listStyle}>Träning och hälsa</Link>
        <br />
        <Link to= "/categories/gbg/akt1" className="category-card" style= {listStyle}>Natur och friluftsliv</Link>
        <br />
        <Link to= "/categories/gbg/akt2" className="category-card" style= {listStyle}>Mat och dryck</Link>
        <br />
        <Link to= "/categories/gbg/akt3" className="category-card" style= {listStyle}>Barn och familj</Link>
        <br />
        <Link to= "/categories/gbg/akt4" className="category-card" style= {listStyle}>Kultur och nöje</Link>
        <br />
        <Link to= "/categories/gbg/akt5" className="category-card" style= {listStyle}>Övrigt</Link>
        <br />
        </div>
    </div>
      
    

      

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