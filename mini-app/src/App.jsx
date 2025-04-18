import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FavMoviesProvider } from "./contexts/FavMoviesContext";
import { FavActorsProvider } from "./contexts/FavActorsContext";
import { FavTvShowsProvider } from "./contexts/FavTvShowsContext";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import TrendingActors from "./pages/TrendingActors";
import TrendingTvShows from "./pages/TrendingTvShows";
import PopularMovies from "./pages/PopularMovies";
import FavMovies from "./pages/FavMovies";
import FavTvShows from "./pages/FavTvShows";
import FavActors from "./pages/FavActors";

function App() {
  return (
    <FavMoviesProvider>
      <FavActorsProvider>
        <FavTvShowsProvider>
          <NavBar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/popular-movies" element={<PopularMovies />} />
              <Route path="/favorite-movies" element={<FavMovies />} />
              <Route path="/favorite-tvshows" element={<FavTvShows />} />
              <Route path="/favorite-actors" element={<FavActors />} />
              <Route path="/trending-actors" element={<TrendingActors />} />
              <Route path="/trending-tvshows" element={<TrendingTvShows />} />
            </Routes>
          </div>
        </FavTvShowsProvider>
      </FavActorsProvider>
    </FavMoviesProvider>
  );
}

export default App;
