import React from "react";
import Paper from "../../containers/Paper";
import { MovieDetailsContainer, MoviePosterImg, MovieDetailsTable, MovieElement } from "../material_ui/DetailsContent";
import Rating from "../../containers/Rating";

const DetailsContent = ({ movie_details, error }) => {
  const deleteMovie = false
  return (
  <Paper content>
    {movie_details && (
      <MovieDetailsContainer>
        <MovieElement>
          <MoviePosterImg url={movie_details.poster} />
        </MovieElement>
        <MovieElement>
          <MovieDetailsTable movie_details={movie_details}>
            <Rating
              key={`${movie_details.imdbID} - ratings`}
              movie_from_card={movie_details}
              showCloseButton={() => false}
              deleteMovie={deleteMovie}
            />
          </MovieDetailsTable>
        </MovieElement>
        <MovieElement>
          <p><span>Story:</span></p>
          <p style={{textAlign: "justify"}}>{movie_details.plot}</p>
        </MovieElement>
      </MovieDetailsContainer>
    )}
    {error && (
      <div>Error with server connection</div>
    )}
  </Paper>
)
    }

export default DetailsContent;
