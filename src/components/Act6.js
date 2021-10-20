import React from 'react';
import { SignOut } from './SignOut';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { SendMessage } from './Send6';
import { NavLinks } from './NavLinks';

export function Act6 (){
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        db.collection('Act6').orderBy('createdAt').limit(20).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))})  
    },[]);

    return(
        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
            <NavLinks />
            <h1>WELCOME TO ACT6!!!</h1>
            <SendMessage />
            
            {messages.map(({id, text, photoURL, createdAt, date}) => (
                
             <div> 
                <div style={{border: "2px black solid", borderRadius:"5px", width:"400px", margin: "20px", padding: "20px"}} key = {id}>
                        <img style= {{height: "60px",float:"right", borderRadius:"50%",}} src={photoURL} alt="" />
                        
                        <p style = {{position:"relative", bottom:"20px"}}>{date}</p>
                        <p>{text}</p>
                </div> 
            </div>
            ))}
            
        </div>
        

    )
}
