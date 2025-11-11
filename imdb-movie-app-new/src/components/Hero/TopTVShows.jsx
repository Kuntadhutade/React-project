import { useEffect, useState } from "react";
import MovieCard from "../Card/MovieCard";
import { Box } from "@mui/material";

const TopTVShows = ({ type = "tv", category, data1 }) => {
  const [shows, setShows] = useState([]);

  const fetchTVShows = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${category}?api_key=ac6ccd4964b9f8e5953099e2a8f50fc9&language=en-US&page=1`
      );
      const data = await res.json();
      setShows(data.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (category) fetchTVShows();
  }, [type, category]);

  return (
    <Box sx={{ px: 2, py: 3 }}>
      <h2>TV Shows - {category.replace("_", " ").toUpperCase()}</h2>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
        {shows.map((show) => (
          <MovieCard
            key={show.id}
            movie={show}
            img={show.poster_path}
            title={show.name}
            rating={show.vote_average}
            id={show.id}
            data1={data1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopTVShows;
