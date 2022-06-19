import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //   A snippet of code which runs based on specific condition
  useEffect(() => {
    // IF [] run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  //   whenever you are usinng any variable outside of useEffect to have to set in [] because it is
  //   dependent on this and update it (re-render)
  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      <div className="row_posters">
        {/* Posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
