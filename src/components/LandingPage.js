import React from "react";
import  {NavLinks} from './NavLinks';
import { SignOut } from "./SignOut";


export function LandingPage() {

    return (
        <>
            <NavLinks />
            <h1 style= {{width: "100vw", textAlign: "center"}}>This is the amig@s homepage!</h1>
            <SignOut />
        </>
    )

}