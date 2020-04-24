import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ hasDropdown = false, children }) => {
    return (
        <li className={`nav-item ${hasDropdown ? "dropdown" : ''}`}>
            {children}
        </li>
    );
};

NavItem.propTypes = {
    hasDropdown: PropTypes.bool,
    children: PropTypes.node,
};

export default NavItem;
