import React from "react";
import NavItem from "./NavItem/NavItem";
import NavLink from "./NavLink/NavLink";
import Dropdown from "../../UI/Dropdown/Dropdown";

const NavItems = () => {
    return (
        <ul className="navbar-nav navbar-right">
            <NavItem>
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
            </NavItem>
            <NavItem hasDropdown>
                <NavLink hasDropdown to="" id="moviesDropdown">
                    Movies
                </NavLink>
                <Dropdown ariaLabelledBy="moviesDropdown">
                    <NavLink className="dropdown-item" to="/movie">
                        Popular
                    </NavLink>
                    <NavLink className="dropdown-item" to="">
                        Upcoming
                    </NavLink>
                    <NavLink className="dropdown-item" to="">
                        Top Rated
                    </NavLink>
                </Dropdown>
            </NavItem>
            <NavItem hasDropdown>
                <NavLink hasDropdown to="" id="tvDropdown">
                    TV Shows
                </NavLink>
                <Dropdown ariaLabelledBy="tvDropdown">
                    <NavLink className="dropdown-item" to="">
                        Popular
                    </NavLink>
                    <NavLink className="dropdown-item" to="">
                        ON TV
                    </NavLink>
                    <NavLink className="dropdown-item" to="">
                        Top Rated
                    </NavLink>
                </Dropdown>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/">
                    More
                </NavLink>
            </NavItem>
        </ul>
    );
};

export default NavItems;
