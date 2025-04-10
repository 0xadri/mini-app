const TMDB_BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const res = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const data = await res.json();
    return data.results
}