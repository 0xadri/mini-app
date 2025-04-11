const TMDB_BASE_URL="https://api.themoviedb.org/3";

/*
 * Docs TheMovieDB
 * https://developer.themoviedb.org/docs/getting-started 
 * https://developer.themoviedb.org/reference/intro/getting-started
*/ 

export const getPopularMovies = async () => {
    const res = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const data = await res.json();
    return data.results
}

export const getTrendingActors = async () => {
    const res = await fetch(`${TMDB_BASE_URL}/trending/person/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const data = await res.json();
    return data.results
}

export const getTrendingTvShows = async () => {
    const res = await fetch(`${TMDB_BASE_URL}/trending/tv/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const data = await res.json();
    return data.results
}