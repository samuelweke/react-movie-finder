import React from "react";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({
    hasDropdown = false,
    to,
    href,
    id,
    children,
    className,
}) => {
    if (hasDropdown) {
        return (
            <a
                className="nav-link"
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
            <Link className={className} to={to}>
                {children}
            </Link>
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
