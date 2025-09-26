import { useEffect, useState, useContext } from "react";
import MovieCard from "../Card/MovieCard";
import { Box} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../api/useFetch";
import { FavoritesContext } from "../../context/FavoritesContext";
import Search from "./Search";
import Favorite from "../DetailsPage/Favorite";





const TopMovies = ({ type = "movie", category, data1 }) => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${category}?api_key=ac6ccd4964b9f8e5953099e2a8f50fc9&language=en-US&`
      );
      const data = await res.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (category) fetchMovies();
  }, [type, category]);

  return (
    <Box sx={{ px: 2, py: 3 }}>
      <h2>Movies - {category.replace("_", " ").toUpperCase()}</h2>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            img={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            id={movie.id}
            data1={data1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopMovies;