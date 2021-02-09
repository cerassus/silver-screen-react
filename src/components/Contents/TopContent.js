import React from "react";
import Paper from "../../containers/Paper";
import MoviesList from "../../components/material_ui/MoviesList";
import MovieCard from "../../components/material_ui/MovieCard";
import Typography from "../material_ui/Typography";

const TopContent = ({ top_movies }) => {
  return (
    <Paper content>
      <MoviesList>
        {
          Array.isArray(top_movies) && top_movies.length > 0
            ? top_movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
            : <Typography content variant="h4">Database is too small to show ranking :(</Typography>
        }
      </MoviesList>
    </Paper>
  );
};

export default TopContent;
