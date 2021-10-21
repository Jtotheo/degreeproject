import React from "react";
import { SignOut } from "./SignOut";
import { NavLinks } from "./NavLinks";

export function Settings () {
    return (
        <>
        <div className="settingswrapper">
            <SignOut />
        </div>
        
        <NavLinks />
        </>
    )
}

export default Settings;




