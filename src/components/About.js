import { width } from '@mui/system';
import React from 'react';
import about from './about.jpg'
import logobeige from './logobeige.png'


export function About(){
    return(
        <div style={{margin: "6%"}}>
            <div className="logodiv">
            <img src={logobeige} alt="Logo" width="130" />
            </div>
            <h2 style={{ marginTop:"5%"}}>Welcome to amig@s...</h2>
            <p style={{ marginBottom:"5%"}}>
                Looking for a workout-buddy, a travel partner for a weekend or just a like-minded person for interesting conversations over a nice dinner? Join our community to meet with people for different activities.
                Here at amig@s we encourage social interactions and our vision is to eliminate involuntary solitude. Join amig@s today without long registration procedures, and just get out there and find a friend to hang out with for just one single occation, our maybe a future friend for life! 
            </p>
            <img src={about} alt="amigas" style={{height: "auto", width: "100%", margin: "auto"}} />
        </div>
        
    )
}