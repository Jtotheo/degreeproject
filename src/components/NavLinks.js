import React from 'react';
import {Router, Link} from 'react-router-dom';


export function NavLinks() {
    return (
        <nav>
            <Link to= "/Act1">Act1</Link>
            <Link to= "/Act2">Act2</Link>
            <Link to= "/Act3">Act3</Link>
            <Link to= "/Act4">Act4</Link>
        </nav>
    )
}