
import React, { useState } from "react";

export default function Header({ onMovieCategoryChange, onTVCategoryChange }) {
  const [activeMovieCategory, setActiveMovieCategory] = useState("popular");
  const [activeTVCategory, setActiveTVCategory] = useState("popular");

  const handleMovieClick = (category) => {
    setActiveMovieCategory(category);
    onMovieCategoryChange(category);
  };

  const handleTVClick = (category) => {
    setActiveTVCategory(category);
    onTVCategoryChange(category);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> MovieApp</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Movies
              </a>
              <ul className="dropdown-menu">
                {["popular","top_rated","upcoming","now_playing"].map(cat => (
                  <li key={cat}>
                    <button
                      className={`dropdown-item ${activeMovieCategory===cat ? "active" : ""}`}
                      onClick={() => handleMovieClick(cat)}
                    >
                      {cat.replace("_"," ").toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

           


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                TV Shows
              </a>
              <ul className="dropdown-menu">
                {["popular","top_rated","upcoming","now_playing"].map(cat => (
                  <li key={cat}>
                    <button
                      className={`dropdown-item ${activeTVCategory===cat ? "active" : ""}`}
                      onClick={() => handleTVClick(cat)}>

                      {cat.replace("_"," ").toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
