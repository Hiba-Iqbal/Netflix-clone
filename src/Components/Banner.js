import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
      }}
    >
      {/* Background Image */}

      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* Button */}
        <div className="banner_Buttons">
          <button className="banner_Button">Play</button>
          <button className="banner_Button">My List</button>
        </div>

        <div className="banner_Description">
          {truncate(movie?.overview, 150)}
        </div>

        {/* Description */}
      </div>
      <div className="banner-fade"></div>
    </header>
  );
};

export default Banner;
