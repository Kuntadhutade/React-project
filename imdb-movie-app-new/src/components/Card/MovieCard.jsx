



import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const MovieCard = ({ img, title, rating, id }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [favorite, setFavorite] = useState(false);

  
  const handleFavorite = async () => {
    try {
      await fetch(
        `https://api.themoviedb.org/3/account/22282689/favorite `,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzZjY2Q0OTY0YjlmOGU1OTUzMDk5ZTJhOGY1MGZjOSIsIm5iZiI6MTc1Njk5MDY3OS44ODcsInN1YiI6IjY4Yjk4Y2Q3M2MyYjE2MmJhMjFmM2Y5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PgNxys26yivwTqfBq4zuojGivB7GGg4-65bMkrFJ6c`,
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: id,
            favorite: !favorite,
          }),
        }
      );
      setFavorite(!favorite); 
    } catch (error) {
      console.log("Favorite API Error:", error);
    }
    setShowMenu(false);
  };

  return (
    <div className="card text-white bg-dark mb-3" style={{ width: "18rem" }}>
      <div className="position-relative">
        <img
          src={`https://image.tmdb.org/t/p/original${img}`}
          className="card-img-top"
          alt={title}
          style={{ height: "250px", objectFit: "cover", cursor: "pointer" }}
          onClick={() => navigate(`/details/${id}`)}
        />

        <button
          className="btn btn-sm btn-outline-light position-absolute top-0 start-0 m-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </button>

        {showMenu && (
          <div
            className="position-absolute bg-light text-dark rounded shadow p-2"
            style={{ top: "35px", right: "10px", zIndex: 10 }}
          >
            <button
              className="btn btn-sm w-100 mb-1 text-start"
              onClick={() => alert("Add to list")}
            >
               Add to List
            </button>
            <button
              className="btn btn-sm w-100 mb-1 text-start"
              onClick={handleFavorite}
            >
              {favorite ? " Favorited" : " Favorite"}
            </button>
            <button
              className="btn btn-sm w-100 mb-1 text-start"
              onClick={() => alert("Watchlist")}
            >
               Watchlist
            </button>
            <button
              className="btn btn-sm w-100 text-start"
              onClick={() => alert("Rate")}
            >
               Your Rating
            </button>
          </div>
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-warning">★ {rating}</p>
        <button
          className="btn btn-primary w-100 mb-2"
          onClick={() => navigate(`/details/${id}`)}>
          View Details
        </button>
        
        <button className="btn btn-outline-danger w-100">Watch on Netflix</button>
      </div>
    </div>
  
  );
};

export default MovieCard;




