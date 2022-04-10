import React, {useEffect, useState} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { MoviesService } from "../services/moviesService";
import { ResultsContextType } from '../types/context';
import { Movie } from '../types/movie';

export const ResultsContext = React.createContext<ResultsContextType | null>(null);

const ResultsProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [allMovies, setAllMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentMovie, setCurrentMovie] = useState<Movie | undefined>();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const sortByRating = (data: Movie[]) => {
        return data.sort((a, b) => b.rating - a.rating);
    }

    const getMovieTitleFromURL = () => {
        let movieTitle = location.pathname.split('/movie/')[1];
        return decodeURI(movieTitle);
    }

    useEffect(() => {
        MoviesService.get()
            .then((data: Movie[]) => {
                let sortedMovies = sortByRating(data);
                setAllMovies(sortedMovies);
                const query = searchParams.get('search');
                if(query) {
                    searchMovies(query, sortedMovies);
                } else {
                    setMovies(sortedMovies);
                }
                if(location.pathname.includes('/movie')) {
                    let movieTitle = getMovieTitleFromURL();
                    let movie = sortedMovies.find(item => item.title === movieTitle);
                    setCurrentMovie(movie);
                }
                setIsLoading(false); 
            });
    }, []); 

    const searchMovies = (query: string, moviesToSearchIn?: Movie[]) => {
        const targetMovies = moviesToSearchIn ?? allMovies;
        const filterdMovies = targetMovies.filter(movie => {
            const lowerCaseQuery = query.toLowerCase();
            return (
                movie.title.toLowerCase().includes(lowerCaseQuery) || String(movie.releaseYear).includes(query) || movie.genre.filter(gen => gen.toLowerCase().includes(lowerCaseQuery)).length > 0
            );
        });
        setMovies(sortByRating(filterdMovies));
        if(query) {
            navigate(`/?search=${query}`, {replace: true});
        } else {
            navigate(`/`, {replace: true});
        }
    }

    return (
        <ResultsContext.Provider value={{movies, isLoading, searchMovies, currentMovie, setCurrentMovie}}>{children}</ResultsContext.Provider>
    )
}

export default ResultsProvider;