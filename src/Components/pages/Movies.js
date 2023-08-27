import React from "react";
import data from "../Assets/data";
import classes from "./Movies.module.css";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const Movies = () => {
  const movieData = useLoaderData();

  const clickHandler = () => {
    movieData.map((movie) => {
      console.log(movie.movieId);
      console.log(movie.title);
      console.log(movie.rating);
      console.log(movie.year);
      console.log(movie.image);
    });
  };

  return (
    <div className={classes.flexdisp}>
      {movieData.map((movie) => {
        return (
          <div key={movie.movieId} className={classes.card}>
            <img
              src={movie.image}
              alt="Banner"
              width="100%"
              height="250px"
            ></img>
            <h4>
              <b>Title : {movie.title}</b>
            </h4>
            <p>
              <b>Rating :</b> {movie.rating}
            </p>
            <p>
              <b>Released Year :</b> {movie.year}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;

export async function loader() {
  const response = await fetch(
    "https://disney-animation-movies-api.p.rapidapi.com/movies/all",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "83c507a6c5mshff8ae5f4dfa54ddp18a8dejsn22e07c04efc1",
        "X-RapidAPI-Host": "disney-animation-movies-api.p.rapidapi.com",
      },
    }
  );

  if (!response.ok) {
    // ....
  } else {
    const resdata = await response.json();
    return resdata;
  }
}
