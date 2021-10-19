import React from "react";
import  {NavLinks} from './NavLinks';
import { SignOut } from "./SignOut";
// import { SignIn } from "./SignIn";
import logo from './logo.png'


export function LandingPage() {

    return (
        <>
            <img src={logo} alt="Logo" width="200" display="flex"/>
            {/* <h1>This is the amig@s homepage!</h1> */}
            <SignOut />
            <NavLinks />
           
        </>
    )

}