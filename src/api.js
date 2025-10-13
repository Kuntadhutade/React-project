// src/api.js
const API_KEY = "तुझा_TMDB_API_KEY"; // 🔑 इथे स्वतःचा TMDB API Key टाक
const BASE_URL = "https://api.themoviedb.org/3";

export async function getDetails(type, id) {
  const res = await fetch(
    `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch details");
  }

  return res.json();
}
