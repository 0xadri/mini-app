import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getPopularMovies } from "./services/api";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      let movies;
      try {
        movies = getPopularMovies();
      } catch (e) {
        console.log(e);
        setError("Failed To Load Popular Movies");
      } finally {
        setIsLoading(false);
      }
      console.log(movies);
    };
    loadPopularMovies();
  }, []);

  return <>Test</>;
}

export default App;
