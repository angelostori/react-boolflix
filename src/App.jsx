import { useState } from "react";
import axios from "axios";
import Searchbar from "./components/SearchBar";
import "bootstrap-icons/font/bootstrap-icons.css";

const base_api_url = 'https://api.themoviedb.org/3/search';

export default function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  function handleSearch(e) {
    e.preventDefault();

    //film
    const movie_endpoint = `${base_api_url}/movie?api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}&query=${search}`;
    //serie
    const tv_endpoint = `${base_api_url}/tv?api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}&query=${search}`;

    axios.get(movie_endpoint)
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));

    axios.get(tv_endpoint)
      .then(res => setSeries(res.data.results))
      .catch(err => console.log(err));
  }


  function getImg(backdrop_path) {
    let path;

    if (!backdrop_path) {
      return path = "https://placehold.co/500x750?text=N/A"
    }
    return path = `https://image.tmdb.org/t/p/w500${backdrop_path}`
  }

  function getStars(vote_average) {
    let vote = Math.ceil(vote_average / 2)
    let stars = []
    for (let i = 0; i < vote; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill"></i>)
    }
    for (let i = 0; i < 5 - vote; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>)
    }
    return stars
  }

  function getFlag(lang) {
    const flags = {
      it: <img width="25" height="25" src="https://img.icons8.com/color/48/italy.png" alt="italy" />,
      en: <img width="25" height="25" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain" />,
      fr: <img width="25" height="25" src="https://img.icons8.com/color/48/france.png" alt="france" />,
      es: <img width="25" height="25" src="https://img.icons8.com/color/48/spain.png" alt="spain" />,
      de: <img width="25" height="25" src="https://img.icons8.com/color/48/germany.png" alt="germany" />,
      ja: <img width="25" height="25" src="https://img.icons8.com/color/48/japan.png" alt="japan" />,
      ko: <img width="25" height="25" src="https://img.icons8.com/color/48/south-korea.png" alt="south-korea" />,
      pt: <img width="25" height="25" src="https://img.icons8.com/color/48/portugal.png" alt="portugal" />,
      ru: <img width="25" height="25" src="https://img.icons8.com/color/48/russian-federation.png" alt="russian" />,
      nl: <img width="25" height="25" src="https://img.icons8.com/color/48/netherlands.png" alt="netherlands" />,
      sv: <img width="25" height="25" src="https://img.icons8.com/color/48/sweden.png" alt="sweden" />,
      hi: <img width="25" height="25" src="https://img.icons8.com/color/48/india.png" alt="india" />,
      cn: <img width="25" height="25" src="https://img.icons8.com/color/48/china.png" alt="china" />,
      zh: <img width="25" height="25" src="https://img.icons8.com/color/48/china.png" alt="china" />,
      sl: <img width="25" height="25" src="https://img.icons8.com/color/48/slovenia.png" alt="slovenia" />,
      sh: <img width="25" height="25" src="https://img.icons8.com/color/48/zimbabwe.png" alt="zimbabwe" />,
      he: <img width="25" height="25" src="https://img.icons8.com/color/48/israel.png" alt="israel" />,
      el: <img width="25" height="25" src="https://img.icons8.com/color/48/greece.png" alt="greece" />,
      th: <img width="25" height="25" src="https://img.icons8.com/color/48/thailand.png" alt="thailand" />
    }

    return flags[lang] || "🏳️"
  }

  return (
    <div className="container py-4">
      <h1>Boolflix</h1>

      <Searchbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <div>
        <h1>Film</h1>
      </div>
      <div className="mt-4">
        {movies.map(movie => (
          <div key={movie.id}>
            <img src={getImg(movie.poster_path)} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Titolo originale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language.toUpperCase()} {getFlag(movie.original_language)}</p>
            <div>Voto: <p className="text-warning">{getStars(movie.vote_average)}</p></div>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <h1>Serie</h1>
      </div>
      <div className="mt-4">
        {series.map(serie => (
          <div key={serie.id}>
            <img src={getImg(serie.poster_path)} alt={serie.title} />
            <h3>{serie.name}</h3>
            <p>Titolo originale: {serie.original_name}</p>
            <p>Lingua: {serie.original_language.toUpperCase()} {getFlag(serie.original_language)}</p>
            <div>Voto: <p className="text-warning">{getStars(serie.vote_average)}</p>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}