import React from 'react';
import {
    Link
} from "react-router-dom";
import SongOverview from './components/SongOverview.js'

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
