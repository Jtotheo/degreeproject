import React from "react";
import {NavLinksIconsSTHLM} from './NavLinksIconsSTHLM'
import { NavLinksIconsMLMO } from "./NavLinksIconsMLMO";
import { NavLinksIconsGTBG } from "./NavLinksIconsGTBG";
// import { SignIn } from "./SignIn";
import logobeige from './logobeige.png';
import Example from './Carousel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { ThemeProvider, createTheme } from '@mui/system';
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

// const theme = createTheme({
//     palette: {
//     textcolor: '#8c55ff',
//     }
// });

export function LandingPage() {
    const [city, setCity] = useState("")
    
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    return (
        <>
        {/* <ThemeProvider theme={theme}> */}
        <div className="logodiv">
            <img src={logobeige} alt="Logo" width="130" />
            </div>
            {/* <h1>This is the amig@s homepage!</h1> */}
            {/* <SignOut /> */} 
            <Example />

            <div className="dropdown">
            <p>Vilken stad vill du se aktiviteter för?</p>
            <FormControl className="dropdownmenu" variant="standard" style={{ fontFamily: `'Jost', sans-serif`, color: "rgba(140, 85, 255, 0)"}} sx={{minWidth: 80 }}>
                <InputLabel>Stad</InputLabel>
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
            {/* </ThemeProvider> */}
            
            {checkCity(city)}
        </>
    )

}

