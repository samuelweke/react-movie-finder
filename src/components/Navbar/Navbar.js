import React from "react";
import NavItems from "./NavItems/NavItems";

import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className={`navbar navbar-expand ${classes.Navbar}`}>
            <div className="container">
                <a className="navbar-brand mr-auto" href="/#">
                    MovieFinder
                </a>
                <NavItems />
            </div>
        </header>
    );
};

export default Navbar;
