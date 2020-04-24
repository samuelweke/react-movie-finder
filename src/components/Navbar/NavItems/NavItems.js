import React from "react";
import NavItem from "./NavItem/NavItem";
import NavLink from "./NavLink/NavLink";
import Dropdown from "../../UI/Dropdown/Dropdown";

const NavItems = () => {
    return (
        <ul className="navbar-nav navbar-right">
            <NavItem>
                <NavLink className="nav-link" href="/#">
                    Home
                </NavLink>
            </NavItem>
            <NavItem hasDropdown>
                <NavLink hasDropdown href="#" id="moviesDropdown">
                    Movies
                </NavLink>
                <Dropdown ariaLabelledBy="moviesDropdown">
                    <NavLink className="dropdown-item" href="#">Popular</NavLink>
                    <NavLink className="dropdown-item" href="#">Upcoming</NavLink>
                    <NavLink className="dropdown-item" href="#">Top Rated</NavLink>
                </Dropdown>
            </NavItem>
            <NavItem hasDropdown>
                <NavLink hasDropdown href="#" id="tvDropdown">
                    TV Shows
                </NavLink>
                <Dropdown ariaLabelledBy="tvDropdown">
                    <NavLink className="dropdown-item" href="#">Popular</NavLink>
                    <NavLink className="dropdown-item" href="#">ON TV</NavLink>
                    <NavLink className="dropdown-item" href="#">Top Rated</NavLink>
                </Dropdown>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" href="/#">
                    More
                </NavLink>
            </NavItem>
        </ul>
    );
};

export default NavItems;
