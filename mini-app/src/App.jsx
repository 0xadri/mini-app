import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FavMoviesProvider } from "./contexts/FavMoviesContext";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import TrendingActors from "./pages/TrendingActors";
import TrendingTvShows from "./pages/TrendingTvShows";
import PopularMovies from "./pages/PopularMovies";
import FavMovies from "./pages/FavMovies";
import FavSeries from "./pages/FavSeries";
import FavActors from "./pages/FavActors";

function App() {
  return (
    <FavMoviesProvider>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular-movies" element={<PopularMovies />} />
          <Route path="/favorite-movies" element={<FavMovies />} />
          <Route path="/favorite-series" element={<FavSeries />} />
          <Route path="/favorite-actors" element={<FavActors />} />
          <Route path="/trending-actors" element={<TrendingActors />} />
          <Route path="/trending-tvshows" element={<TrendingTvShows />} />
        </Routes>
      </div>
    </FavMoviesProvider>
  );
}

export default App;
