import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/FavMovies";
import NavBar from "./components/NavBar";
import TrendingActors from "./pages/TrendingActors";
import TrendingTvShows from "./pages/TrendingTvShows";
import PopularMovies from "./pages/PopularMovies";
import { FavMoviesProvider } from "./contexts/FavMoviesContext";
import FavMovies from "./pages/FavMovies";

function App() {
  return (
    <FavMoviesProvider>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular-movies" element={<PopularMovies />} />
          <Route path="/favorite-movies" element={<FavMovies />} />
          <Route path="/trending-actors" element={<TrendingActors />} />
          <Route path="/trending-tvshows" element={<TrendingTvShows />} />
        </Routes>
      </div>
    </FavMoviesProvider>
  );
}

export default App;
