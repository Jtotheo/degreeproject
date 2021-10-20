import React from 'react';
// import { SignOut } from './SignOut';
import { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import { SendMessage } from './Send1';
import { NavLinks } from './NavLinks';

export function Act1 (){
    const scroll = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        db.collection('Act1').orderBy('createdAt').limit(20).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))})  
    },[]);

    return(
        <div className="msgcontainer">
            <NavLinks />
            <h1>WELCOME TO ACT1!!!</h1>
            <div className="msgs">
                {messages.map(({id, text, photoURL, date, uid}) => (
                    
                <div> 
                    <div key= {id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img style= {{height: "60px",float:"right", borderRadius:"50%",}} src={photoURL} alt="" />
                            
                            <p style = {{position:"relative", bottom:"20px"}}>{date}</p>
                            <p>{text}</p>
                    </div> 
                </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
        

    )
}

// <p style = {{position:"relative", bottom:"20px"}}>{new Date(createdAt.toDate()).toString().slice(0,24)}</p> 

