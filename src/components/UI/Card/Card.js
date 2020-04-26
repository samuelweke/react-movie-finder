import React from "react";
import PropTypes from "prop-types";

import classes from "./Card.module.css";

const Card = ({ src, alt, title, date }) => {
    return (
        <div className={`card border-0 ${classes.Card}`}>
            <div className={classes.CardImgWrapper}>
                <img src={src} className="h-100 w-100" alt={alt} />
            </div>
            <div className={classes.CardBody}>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
};

export default Card;
