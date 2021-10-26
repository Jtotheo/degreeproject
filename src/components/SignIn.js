import React from 'react';
import firebase from 'firebase';
import { auth } from '../firebase'

function SignIn (){
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)

    }
    return(
        <div style={{width: "100%", textAlign: "center"}}>
            <button onClick={signInWithGoogle}>Logga in</button>

        </div>
        

    )
}

export default SignIn