import React from 'react';
import { SignOut } from './SignOut';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { SendMessage } from './SendMessage'

function postMoment() {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('sv-SE',options);
    const time = new Date().toLocaleTimeString();
    const dateAndTime = `${date} ${time}`;
    const formatedDateAndTime = dateAndTime.charAt(0).toUpperCase() + dateAndTime.slice(1);
    return formatedDateAndTime
}

function Chat (){
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(20).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))})  
    },[]);

    return(
        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
            <SignOut />
            {messages.map(({id, text, photoURL, createdAt}) => (
                
             <div> 
                <div style={{border: "2px black solid", borderRadius:"5px", width:"400px", margin: "20px", padding: "20px"}} key = {id}>
                        <img style= {{height: "60px",float:"right", borderRadius:"50%",}} src={photoURL} alt="" />
                        
                        <p style = {{position:"relative", bottom:"20px"}}>{new Date(createdAt.toDate()).toString().slice(0,24)}</p>
                        <p>{text}</p>
                </div> 
            </div>
            ))}
            <SendMessage />
        </div>
        

    )
}

export default Chat