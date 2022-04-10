import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { ResultsContext } from '../../context/ResultsContext';
import { ResultsContextType } from '../../types/context';
import { Movie } from '../../types/movie';
import ResultCard from '../ResultCard';
import classes from "./styles.module.css";

const ResultsGrid:React.FC = () => {

    const {movies, setCurrentMovie} = React.useContext(ResultsContext) as ResultsContextType;
    
    const onMovieClicked = (movie: Movie) => {
        setCurrentMovie(movie)
    }

    return (
        <div className={classes.gridWrapper}>
            
            {movies.map(movie => {
                return (
                    <Link to={`movie/${movie.title}`} key={movie.title} onClick={() => onMovieClicked(movie)}>
                        <ResultCard key={movie.title} movie={movie}/>
                    </Link>
                );
            })}
        </div>
    )
}

export default ResultsGrid; 