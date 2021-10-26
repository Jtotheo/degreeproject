import React from 'react';
import {Router, Link} from 'react-router-dom';
import { useState } from 'react';
import { NavLinksIconsSTHLM } from './NavLinksIconsSTHLM';


export function CreateActivitySTHLM() {
    const [category, setCategory] = useState("");

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <>
            <div className= "dropdown">
            <p>Skapa en aktivitet i en stad!</p>
                <select name="categories" id="categorySelect"
                onChange= {(e) => {
                    const selectedCategory = e.target.value;
                    setCategory(selectedCategory);
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

            <NavLinksIconsSTHLM />

            <div className ="createwrapper">
            <form >
                <textarea placeholder="Beskriv din aktivitet här!" type="text" rows="18" cols="35" />
                <button className="send" type="submit">Skicka</button>
            </form>
            </div>
            </>
    )
}