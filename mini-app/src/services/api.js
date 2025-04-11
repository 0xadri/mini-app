const TMDB_BASE_URL="https://api.themoviedb.org/3";

/*
 * Docs TheMovieDB
 * https://developer.themoviedb.org/docs/getting-started 
 * https://developer.themoviedb.org/reference/intro/getting-started
*/ 

const fetchCall = async (req) => {
    console.log(req);
    const res = await fetch(req);
    const data = await res.json();
    return data.results
}
export const getPopularMovies = async () => {
    return fetchCall(`${TMDB_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
}

export const getTrendingActors = async () => {
    return fetchCall(`${TMDB_BASE_URL}/trending/person/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
}

export const getTrendingTvShows = async () => {
    return fetchCall(`${TMDB_BASE_URL}/trending/tv/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
}