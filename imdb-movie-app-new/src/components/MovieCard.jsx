// import React from "react";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, type, onAddFavorite }) => {
  return (
    <div style={{ width: "200px", margin: "10px", color: "white" }}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title || movie.name}
        style={{ borderRadius: "8px" }}
      />
      <h4>{movie.title || movie.name}</h4>
      <p>⭐ {movie.vote_average}</p>

      <Link to={`/details/${type}/${movie.id}`}>
        <button>Details</button>
      </Link>

      <button onClick={() => onAddFavorite(movie)}>❤️ Add Fav</button>
    </div>
  );
};

export default MovieCard;
