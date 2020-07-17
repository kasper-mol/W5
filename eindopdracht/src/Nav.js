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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="./about">About</Link>
                    </li>
                    <li>
                        <Link to="https://www.linkedin.com/in/kasper-mol/">LinkeIn</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
