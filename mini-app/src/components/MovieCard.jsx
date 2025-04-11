const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="moviecard">
      <h3>{movie.original_title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
    </div>
  );
};

export default MovieCard;
