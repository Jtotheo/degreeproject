import React from 'react';
import { SignOut } from './SignOut';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { SendMessage } from './SendMessage';
import { NavLinks } from './NavLinks';

export function Act3 (){
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(20).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))})  
    },[]);

    return(
        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
            <NavLinks />
            <h1>WELCOME TO ACT3!!!</h1>
            <SendMessage />
            
            {messages.map(({id, text, photoURL, createdAt}) => (
                
             <div> 
                <div style={{border: "2px black solid", borderRadius:"5px", width:"400px", margin: "20px", padding: "20px"}} key = {id}>
                        <img style= {{height: "60px",float:"right", borderRadius:"50%",}} src={photoURL} alt="" />
                        
                        <p style = {{position:"relative", bottom:"20px"}}>{new Date(createdAt.toDate()).toString().slice(0,24)}</p>
                        <p>{text}</p>
                </div> 
            </div>
            ))}
            <SignOut />
        </div>
        

    )
}
