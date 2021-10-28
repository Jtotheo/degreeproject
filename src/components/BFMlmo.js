import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import { SendMessage } from './Send4MLMO';
import { NavLinksIconsMLMO } from './NavLinksIconsMLMO';

export function BFMlmo (){
    const scroll = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        db.collection('Aktivitet3Mlmo').orderBy('createdAt').limit(20).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))})  
    },[]);

    return(
        <div className="msgcontainer">
            <NavLinksIconsMLMO />
            <div className="headerstyle">
            <h2 className="subject">MALMÖ | BARN & FAMILJ</h2>
            </div>
            <div className="msgs">
                {messages.map(({id, text, photoURL, date, uid}) => (
                    
                <div> 
                    <p className="date">{date}</p>
                    <div key= {id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img style= {{height: "60px",float:"right", borderRadius:"50%",}} src={photoURL} alt="" />
                            
                            
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



