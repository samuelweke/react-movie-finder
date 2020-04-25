import React from "react";
import NavItems from './NavItems/NavItems'

const Navbar = () => {
    return (
        <header className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand mr-auto" href="/#">MovieFinder</a>
            <NavItems />
        </header>
    );
};

export default Navbar;
