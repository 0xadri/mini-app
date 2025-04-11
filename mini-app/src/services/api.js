const TMDB_BASE_URL="https://api.themoviedb.org/3";

/*
 * Docs TheMovieDB
 * https://developer.themoviedb.org/docs/getting-started 
 * https://developer.themoviedb.org/reference/intro/getting-started
*/ 

const fetchCall = async (req) => {
    // console.log(req);
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

export const getMovieCredits = async (id) => {
    const req = `${TMDB_BASE_URL}/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    // console.log(req);
    const res = await fetch(req);
    const data = await res.json();
    return data
}

export const searchMoviesContainingInTitle = async (searchTerm) => {
    return fetchCall(`${TMDB_BASE_URL}/search/movie?query=${searchTerm}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
}
// fetch('https://api.themoviedb.org/3/search/movie?query=world&include_adult=false&language=en-US&page=1', options)
