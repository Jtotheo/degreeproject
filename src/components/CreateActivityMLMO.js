import React from 'react';
import {Router, Link} from 'react-router-dom';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NavLinksIconsSTHLM } from './NavLinksIconsSTHLM';
import { NavLinksIconsMLMO } from "./NavLinksIconsMLMO";
import { NavLinksIconsGTBG } from "./NavLinksIconsGTBG";



export function CreateActivityMLMO() {
    const [category, setCategory] = useState("");

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <>
        <div className="dropdown">
        <h2 className="subject">Välj aktivitetskategori</h2>
            <FormControl className="dropdownmenu" variant="standard" style={{ fontFamily: `'Jost', sans-serif`, color: "rgba(140, 85, 255, 0)"}} sx={{minWidth: 120 }}>
                <InputLabel>Kategori</InputLabel>
                <Select
                id="category"
                value={category}
                label="Kategori"
                onChange={handleChange}
                >
                <MenuItem value={1}>Träning och hälsa</MenuItem>
                <MenuItem value={2}>Natur och friluftsliv</MenuItem>
                <MenuItem value={3}>Mat och dryck</MenuItem>
                <MenuItem value={4}>Barn och familj</MenuItem>
                <MenuItem value={5}>Kultur och nöje</MenuItem>
                <MenuItem value={6}>Övrigt</MenuItem>
                </Select>
            </FormControl>
            </div>
            <NavLinksIconsMLMO />

            <div className ="createwrapper">
            <form >
                <textarea placeholder="Beskriv din aktivitet här!" type="text" rows="18" cols="35" />
                <button className="send"  type= "submit">Send</button>
            </form>
            </div>
            </>
    )
}