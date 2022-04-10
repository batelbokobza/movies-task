import React from 'react';
import { ResultsContext } from '../../context/ResultsContext';
import { ResultsContextType } from '../../types/context';
import StarsRating from '../StarsRating';
import classes from "./styles.module.css";

const MoviePage:React.FC = () => {
    const {currentMovie} = React.useContext(ResultsContext) as ResultsContextType;
    
    return (
        <div className={classes.moviePageWrapper}>
            <img className={classes.image} src={currentMovie?.image}/>
            <div className={classes.movieInfo}>
                <div className={classes.movieName}>{currentMovie?.title}</div>
                <StarsRating rating={(currentMovie?.rating ?? 1)/2}/>
                <div className={classes.geners}>
                    <span className={classes.valuePrefix}>Genres: </span> 
                    {currentMovie?.genre.join(', ')}
                </div>
                <div className={classes.year}>
                    <span className={classes.valuePrefix}>Year: </span>
                    {currentMovie?.releaseYear}
                </div>
            </div>
        </div>
    );
}

export default MoviePage; 