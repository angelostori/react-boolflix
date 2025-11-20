import { useState } from "react";
import axios from "axios";
import Searchbar from "./components/SearchBar";

const base_movie_api_url = 'https://api.themoviedb.org/3/search/movie';

export default function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  function handleSearch(e) {
    e.preventDefault();

    const endpoint = `${base_movie_api_url}?api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}&query=${search}`;

    axios.get(endpoint)
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));
  }

  return (
    <div className="container py-4">
      <h1>Boolflix</h1>

      <Searchbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <div className="mt-4">
        {movies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Titolo originale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language}</p>
            <p>Voto: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  )
}