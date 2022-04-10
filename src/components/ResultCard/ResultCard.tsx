import React, { createRef, useEffect, useRef } from 'react';
import { Movie } from '../../types/movie';
import StarsRating from '../StarsRating';
import classes from "./styles.module.css";

interface Props {
    movie: Movie;
}

const ResultCard:React.FC<Props> = ({movie}) => {

    return (
        <div className={classes.resultCardWrapper}>
            <img className={classes.image} src={movie.image}/>

            <div className={classes.movieName}>{movie.title}</div>

            <StarsRating rating={movie.rating/2}/>

            <div className={classes.geners}>
                <span className={classes.valuePrefix}>Genres: </span> 
                {movie.genre.join(', ')}
            </div>

            <div className={classes.year}>
                <span className={classes.valuePrefix}>Year: </span>
                {movie.releaseYear}
            </div>

        </div>
    )
} 

export default ResultCard; 