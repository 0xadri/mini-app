const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <h3>Movie Card</h3>
      <div>{movie.original_title}</div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
    </>
  );
};

export default MovieCard;
