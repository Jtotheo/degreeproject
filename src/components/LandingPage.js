import React from "react";
import  {NavLinks} from './NavLinks';
import {NavLinksIconsSTHLM} from './NavLinksIconsSTHLM'
import { NavLinksIconsMLMO } from "./NavLinksIconsMLMO";
import { NavLinksIconsGTBG } from "./NavLinksIconsGTBG";

import {NavLinksIcons} from './NavLinksIcons'
// import { SignIn } from "./SignIn";
import logograd from './logograd.png';
import Example from './Carousel';

import { useState, useEffect } from "react";

function checkCity(test) {
    if (test === "goteborg") {
        return <NavLinksIconsGTBG />
    } 
    else if (test === "malmo") {
        return <NavLinksIconsMLMO />
    }
    else return <NavLinksIconsSTHLM />
}

// import { SignOut } from "./SignOut";
// import { SignIn } from "./SignIn";



export function LandingPage() {
    const [city, setCity] = useState("")
   

    console.log(city)
    return (
        <>
        <div className="logodiv">
            <img src={logograd} alt="Logo" width="125" />
            </div>
            {/* <h1>This is the amig@s homepage!</h1> */}
           
           
            
           
            {/* <SignOut /> */}
           

            <Example />

            <div className= "dropdown">
            <p>Vilken stad vill du se aktiviteter för?</p>
                <select name="cities" id="citySelect"
                onChange= {(e) => {
                    const selectedCity = e.target.value;
                    setCity(selectedCity);
                    console.log(city)
                }}>
                <option disabled selected value> Välj en stad! </option>
                <option value="stockholm">Stockholm</option>
                <option value="malmo">Malmö</option>
                <option value="goteborg">Göteborg</option>
                </select>
            </div>
            
          

            {checkCity(city)}

            
           
        </>
    )

}

