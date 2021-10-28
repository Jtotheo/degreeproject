import React from "react";
import {NavLinksIconsSTHLM} from './NavLinksIconsSTHLM'
import { NavLinksIconsMLMO } from "./NavLinksIconsMLMO";
import { NavLinksIconsGTBG } from "./NavLinksIconsGTBG";
import logobeige from './logobeige.png';
import Example from './Carousel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";

function checkCity(test) {
    if (test === 3) {
        return <NavLinksIconsGTBG />
    } 
    else if (test === 2) {
        return <NavLinksIconsMLMO />
    }
    else return <NavLinksIconsSTHLM />
}


export function LandingPage() {
    const [city, setCity] = useState("")
    
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    return (
        <>
        <div className="logodiv">
            <img src={logobeige} alt="Logo" width="130" />
            </div>
            
            <Example />

            <div className="dropdown">
            <p>Vilken stad vill du se aktiviteter för?</p>
            <FormControl className="dropdownmenu" variant="standard" sx={{minWidth: 80 }}>
                <InputLabel>Välj</InputLabel>
                <Select
                id="select"
                value={city}
                label="Stad"
                onChange={handleChange}
                >
                <MenuItem value={1}>Stockholm</MenuItem>
                <MenuItem value={2}>Malmö</MenuItem>
                <MenuItem value={3}>Göteborg</MenuItem>
                </Select>
            </FormControl>
            </div>
            
            {checkCity(city)}
        </>
    )
}

