import React from "react";
import Paper from "../../containers/Paper";
import MoviesList from "../material_ui/MoviesList";
import MovieCard from "./MovieCard";
import Typography from "../material_ui/Typography";

const MoviesListContent = ({ database, list }) => {
  return (
    <Paper content>
      <MoviesList>
        {
          Array.isArray(database) ? (
            database.length === 0 ? (
              <Typography variant="h4">Nothing was found.</Typography>
            ) : (
              database.map((movie) => (
                <MovieCard list={list} key={movie.imdbID} movie={movie} />
              ))
            )
          ) : (
            <Typography content variant="h4">Search for new movies!</Typography>
          )
        }
      </MoviesList>
    </Paper>
  );
};

export default MoviesListContent;
