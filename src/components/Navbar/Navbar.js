import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems/NavItems";

import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className={`navbar navbar-expand ${classes.Navbar}`}>
            <div className="container">
                <NavLink className="navbar-brand mr-auto" to="/">
                    MovieFinder
                </NavLink>
                <NavItems />
            </div>
        </header>
    );
};

export default Navbar;
