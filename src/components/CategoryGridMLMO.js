import React from 'react';
import {Router, Link} from 'react-router-dom';
import { NavLinksIconsMLMO } from './NavLinksIconsMLMO';



const listStyle = {
    display: "block",
    color: "black",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none"
}


export function CategoryGridMLMO() {
    return (

        <div>
        
        <div className="category-cards">
        <Link to= "/categories/mlmo/akt" className="category-card" style= {listStyle}>Träning och hälsa</Link>
        <br />
        <Link to= "/categories/mlmo/akt1" className="category-card" style= {listStyle}>Natur och friluftsliv</Link>
        <br />
        <Link to= "/categories/mlmo/akt2" className="category-card" style= {listStyle}>Mat och dryck</Link>
        <br />
        <Link to= "/categories/mlmo/akt3" className="category-card" style= {listStyle}>Barn och familj</Link>
        <br />
        <Link to= "/categories/mlmo/akt4" className="category-card" style= {listStyle}>Kultur och nöje</Link>
        <br />
        <Link to= "/categories/mlmo/akt5" className="category-card" style= {listStyle}>Övrigt</Link>
        <br />
        </div>
        <NavLinksIconsMLMO />
    </div>
      
    )
}