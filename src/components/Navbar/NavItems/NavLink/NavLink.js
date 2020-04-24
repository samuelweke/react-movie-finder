import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ hasDropdown = false, href, id, children, className }) => {
    if (hasDropdown) {
        return (
            <a
                className="nav-link dropdown-toggle"
                href={href}
                id={id}
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                {children}
            </a>
        );
    } else {
        return (
            <a className={className} href={href}>
                {children}
            </a>
        );
    }
};

NavLink.propTypes = {
    hasDropdown: PropTypes.bool,
    href: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
};

export default NavLink;
