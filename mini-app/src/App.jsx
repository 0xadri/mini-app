import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import TrendingActors from "./pages/TrendingActors";
import TrendingTvShows from "./pages/TrendingTvShows";
import PopularMovies from "./pages/PopularMovies";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular-movies" element={<PopularMovies />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trending-actors" element={<TrendingActors />} />
          <Route path="/trending-tvshows" element={<TrendingTvShows />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
