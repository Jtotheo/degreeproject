import React, { useState } from 'react';
import { db, auth } from '../firebase'
import firebase from 'firebase'

function postMoment() {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('sv-SE',options);
    const time = new Date().toLocaleTimeString();
    const dateAndTime = `${date} ${time}`;
    const formatedDateAndTime = dateAndTime.charAt(0).toUpperCase() + dateAndTime.slice(1, 3) + " " + dateAndTime.slice(7, 10) + dateAndTime.slice(10, 13) + " " + dateAndTime.slice(18);
    return formatedDateAndTime
}

export function SendMessage({scroll}) {

    const [msg, setMsg] = useState("");

    async function sendMessage(e){
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser
        await db.collection('Aktivitet1Mlmo').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            date: postMoment()
        })
        setMsg('');
        scroll.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className ="sendwrapper">
            <form onSubmit = {sendMessage}>
                <input value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder="Meddelande..." type="text" />
                <button className="send"  type= "submit">Skicka</button>
            </form>
        </div>
    )
}