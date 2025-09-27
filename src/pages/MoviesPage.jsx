// import { useParams } from "react-router-dom";
// import useFetch from "../api/useFetch";


// export default function MoviesPage() {
//   const { category } = useParams();
//   const { data: movies, loading, error } = useFetch(
//     `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
//   );

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   const titles = {
//     popular: "Popular Movies",
//     top_rated: "Top Rated Movies",
//     upcoming: "Upcoming Movies",
//     now_playing: "Now Playing Movies",
//   };

//   return (
//     <div className="container mt-3">
//       <h3>{titles[category] || "Movies"}</h3>
//       <div className="row">
//         {movies.map((m) => (
//           <MovieCard key={m.id} item={m} type="movie" />
//         ))}
//       </div>
//     </div>
//   );
// }

