import React from "react";
import  {NavLinks} from './NavLinks';
// import { SignOut } from "./SignOut";
// import { SignIn } from "./SignIn";
import logograd from './logograd.png';
import Example from './Carousel';


export function LandingPage() {

    return (
        <>
        <div className="logodiv">
            <img src={logograd} alt="Logo" width="100" />
            </div>
            {/* <h1>This is the amig@s homepage!</h1> */}
            {/* <SignOut /> */}
            <NavLinks />

            <Example />
           
        </>
    )

}