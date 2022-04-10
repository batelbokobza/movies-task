import { Movie } from "./movie";

export type ResultsContextType = {
    movies: Movie[];
    isLoading: boolean;
    searchMovies: (query: string) => void;
    currentMovie: Movie | undefined;
    setCurrentMovie: (movie: Movie) => void;
}