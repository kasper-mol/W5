import React from 'react';
import {
    Link
} from "react-router-dom";


function Nav() {
    return (
        <div>
            <nav>
                <ul className="navlinks">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="./about">
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
