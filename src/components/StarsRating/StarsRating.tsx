import React from 'react';
import Rating from '@mui/material/Rating';
import classes from "./styles.module.css";

interface Props {
    rating: number;
}

const StarsRating:React.FC<Props> = ({rating}) => {
    return (
        <div className={classes.ratingWrapper}>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} value={rating} readOnly />
            <span className={classes.ratingValue}>({rating})</span>
        </div>
    )
}
 
export default StarsRating; 