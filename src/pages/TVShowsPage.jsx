// import { useParams } from "react-router-dom";
// import useFetch from "../api/useFetch";
// import MovieCard from "./Card/MovieCard";

// export default function TVShowsPage() {
//   const { category } = useParams();
//   const { data: shows, loading, error } = useFetch(
//     `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
//   );

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   const titles = {
//     popular: "Popular TV Shows",
//     top_rated: "Top Rated TV Shows",
//     airing_today: "Airing Today",
//     on_the_air: "On The Air",
//   };

//   return (
//     <div className="container mt-3">
//       <h3>{titles[category] || "TV Shows"}</h3>
//       <div className="row">
//         {shows.map((s) => (
//           <MovieCard key={s.id} item={s} type="tv" />
//         ))}
//       </div>
//     </div>
//   );
// }
