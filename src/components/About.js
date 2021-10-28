import React from 'react';
import about from './about.jpg'
import logobeige from './logobeige.png'


export function About(){
    return(
        <div style={{margin: "6%"}}>
            <div className="logodiv">
            <img src={logobeige} alt="Logo" width="130" />
            </div>
            <h2 style={{textAlign: "center", color:"#F5F3E3", marginTop:"5%"}}>Välkommen till amig@s!</h2>
            <p style={{ marginBottom:"5%"}}>
            Letar du efter en träningskompis, en resepartner för en helg eller bara en likasinnad för intressanta samtal över en trevlig middag? Gå med i vår community för att träffa andra för olika aktiviteter.
            Här på amig@s uppmuntrar vi sociala interaktioner och vår vision är att om man inte vill vara ensam, ska man inte behöva vara det! Gå med i amig@s idag utan en lång registreringsprocess, och kasta dig ut för att hitta en amig@, kanske en vän för livet!
            </p>
            <img src={about} alt="amigas" style={{height: "auto", width: "100%", margin: "auto"}} />
        </div>
        
    )
}