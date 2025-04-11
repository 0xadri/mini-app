const ActorCard = ({ actor }) => {
  return (
    <div className="actor-card">
      <h3>{actor.name}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />
    </div>
  );
};

export default ActorCard;
