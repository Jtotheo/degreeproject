import React from 'react';
import {Router, Link} from 'react-router-dom';
import { useState } from 'react';
import { NavLinksIconsSTHLM } from './NavLinksIconsSTHLM';



// const listStyle = {
//     display: "block",
//     color: "black",
//     textAlign: "center",
//     padding: "16px",
//     textDecoration: "none"
// }


export function CreateActivity() {
    const [category, setCategory] = useState("");

    return (

        <div>
            
            <div className= "dropdown">
            <p>Skapa en aktivitet i en stad!</p>
                <select name="categories" id="categorySelect"
                onChange= {(e) => {
                    const selectedCategory = e.target.value;
                    setCategory(selectedCategory);
                    console.log(category)
                }}>
                <option disabled selected value> Välj en kategori! </option>
                <option value="TH">Träning och hälsa</option>
                <option value="NF">Natur och friluftsliv</option>
                <option value="MD">Mat och dryck</option>
                <option value="BF">Barn och familj</option>
                <option value="KN">Kultur och nöje</option>
                <option value="OVRIGT">Övrigt</option>
                </select>
            </div>

            {/* Skapa inputelement

            Skapa submitbutton

            Routa så att den länkar till pluset

            Kolla hur navlinks ska renderas */}

            <NavLinksIconsSTHLM />
        </div>
      
    )
}