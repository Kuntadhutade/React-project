// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useState, createContext } from "react";





import TopMovies from "./components/Hero/TopMovies";
import TopTVShows from "./components/Hero/TopTVShows";
import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "./components/DetailsPage/DetailsPage";
import Header from "./components/Hero/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import { createContext, useState } from "react";
import LoginPage from "./Login";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Favorites from "./pages/Favorite";
import ProtectedRoute from "./auth/ProtectedRoute";
import Search from "./components/Hero/Search";
import TodoList from "./components/Todo/TodoList";

export const UserContext = createContext();



function App() {
  
  const [movieCategory, setMovieCategory] = useState("popular");
  const [tvCategory, setTVCategory] = useState("popular"); 

  const [data1] = useState("234");

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/Search" element={<Search />} />
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Header
                  onMovieCategoryChange={setMovieCategory}
                  onTVCategoryChange={setTVCategory} 
                />

                <TopMovies
                  type="movie"
                  category={movieCategory}
                  data1={data1}
                />

               
                <TopTVShows type="tv" 
                category={tvCategory}
                data1={data1} 
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <DetailsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/favorite"
            element={
              <ProtectedRoute>
                <FavoritesProvider>
                  <Favorites />
                </FavoritesProvider>
              </ProtectedRoute>
            }
          />

          <Route
            path="/todolist"
            element={
              <ProtectedRoute>
                <TodoList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
