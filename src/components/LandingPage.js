import React from "react";
import  {NavLinks} from './NavLinks';
import {NavLinksSTHLM} from './NavLinksSTHLM'
import { NavLinksMLMO } from "./NavLinksMLMO";
import { NavLinksGTBG } from "./NavLinksGTBG";
import { SignOut } from "./SignOut";
// import { SignIn } from "./SignIn";

import { useState, useEffect } from "react";

function checkCity(test) {
    if (test === "goteborg") {
        return <NavLinksGTBG />
    } 
    else if (test === "malmo") {
        return <NavLinksMLMO />
    }
    else return <NavLinksSTHLM />
}

// import { SignOut } from "./SignOut";
// import { SignIn } from "./SignIn";
import logograd from './logograd.png';
import Example from './Carousel';


export function LandingPage() {
    const [city, setCity] = useState("")
   

    console.log(city)
    return (
        <>
        <div className="logodiv">
            <img src={logograd} alt="Logo" width="100" />
            </div>
            {/* <h1>This is the amig@s homepage!</h1> */}
            <SignOut />
           
            <div className= "dropdown">
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
            
           
            {/* <SignOut /> */}
            <NavLinks />

            <Example />
           
        </>
    )

}

