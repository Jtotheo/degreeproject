import React from "react";
import { auth } from "../firebase";

export function SignOut (){
    return (
        <div>
            <button onClick={()=>auth.signOut()}>Sign out</button>
        </div>
    )
}