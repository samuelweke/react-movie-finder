import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ children, ariaLabelledBy }) => {
    return (
        <div className="dropdown-menu" aria-labelledby={ariaLabelledBy}>
            {children}
        </div>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    ariaLabelledBy: PropTypes.string.isRequired,
};

export default Dropdown;
