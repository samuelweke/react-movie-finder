import React from "react";
import Skeleton from "react-loading-skeleton";

import classes from '../Card/Card.module.css'

const CardSkeleton = () => {
    return (
        <div className={`card border-0 ${classes.Card}`}>
            <div className={classes.CardImgWrapper}>
                    <Skeleton width={150} height={225}/>
            </div>
            <div className={classes.CardBody}>
                <h2>
                    <Skeleton />
                </h2>
                <p>
                    <Skeleton width={100}/>
                </p>
            </div>
        </div>
    );
};

export default CardSkeleton;