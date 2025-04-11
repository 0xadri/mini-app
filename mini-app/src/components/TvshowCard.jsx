const TvshowCard = ({ tvshow }) => {
  return (
    <div className="tvshow-card">
      <h3>{tvshow.name}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
        alt={tvshow.name}
      />
    </div>
  );
};

export default TvshowCard;
