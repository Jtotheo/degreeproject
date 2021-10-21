import React from 'react';
import {Router, Link} from 'react-router-dom';
import { NavLinksIconsSTHLM } from './NavLinksIconsSTHLM';



const listStyle = {
    display: "block",
    color: "black",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none"
}


export function CategoryGridSTHLM() {
    return (

        <div>
            
            <div className="category-cards">
            <Link to= "/categories/sthlm/akt" className="category-card" style= {listStyle}>Träning och hälsa</Link>
            <br />
            <Link to= "/categories/sthlm/akt1" className="category-card" style= {listStyle}>Natur och friluftsliv</Link>
            <br />
            <Link to= "/categories/sthlm/akt2" className="category-card" style= {listStyle}>Mat och dryck</Link>
            <br />
            <Link to= "/categories/sthlm/akt3" className="category-card" style= {listStyle}>Barn och familj</Link>
            <br />
            <Link to= "/categories/sthlm/akt4" className="category-card" style= {listStyle}>Kultur och nöje</Link>
            <br />
            <Link to= "/categories/sthlm/akt5" className="category-card" style= {listStyle}>Övrigt</Link>
            <br />
            </div>

            <NavLinksIconsSTHLM />
        </div>
      
    )
}