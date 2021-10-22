import React from "react";
import {NavLinksIconsSTHLM} from './NavLinksIconsSTHLM'
import { NavLinksIconsMLMO } from "./NavLinksIconsMLMO";
import { NavLinksIconsGTBG } from "./NavLinksIconsGTBG";
// import { SignIn } from "./SignIn";
import logobeige from './logobeige.png';
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


export function LandingPage() {
    const [city, setCity] = useState("")
   

    console.log(city)

    //Kolla upp SignIn!
    return (
        <>
        <div className="logodiv">
            <img src={logobeige} alt="Logo" width="130" />
            </div>
            {/* <h1>This is the amig@s homepage!</h1> */}
            {/* <SignOut /> */} 
           
            <Example />

            <div className= "dropdown">
            <p>Vilken stad vill du se aktiviteter för?</p>
                <select className="select" name="cities" id="citySelect"
                onChange= {(e) => {
                    const selectedCity = e.target.value;
                    setCity(selectedCity);
                    console.log(city)
                }}>
                
                <option className="option" disabled selected value> Välj en stad! </option>
                <option className="option" value="stockholm">Stockholm</option>
                <option className="option" value="malmo">Malmö</option>
                <option className="option" value="goteborg">Göteborg</option>
                
                </select>
            </div>
            
            {checkCity(city)}

        </>
    )

}

