import { Movie } from "../types/movie";


export const MoviesService = {
    get: async(): Promise<Movie[]> => {
        const url = 'https://corsanywhere.herokuapp.com/https://api.androidhive.info/json/movies.json'; // add prefix corsanywhere to bypass cors error
        const response = await fetch(url);
        const data = await response.json();
        if(response.ok) {
            return data;
        } else {
            return Promise.reject(new Error(`Can't fetch movies`));
        }
    }
}