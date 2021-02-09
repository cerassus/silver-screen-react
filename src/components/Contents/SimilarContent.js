import React, { Fragment, useState } from "react";
import Paper from "../../containers/Paper";
import SimilarContainer from "../material_ui/SimilarContent";
import Typography from "../material_ui/Typography";
import MovieSimilarCard from "../../components/material_ui/MovieSimilarCard";

const SimilarContent = ({ recentSearchResponse, movie_details }) => {
  const [title, setTitle] = useState("Similiar Movies:");
  return recentSearchResponse ? (
    <Fragment>
      <Paper>
        <Typography variant="h5">{title}</Typography>
      </Paper>
      <SimilarContainer>
        {Array.isArray(recentSearchResponse) &&
          recentSearchResponse
            .filter(item => item.imdbID !== movie_details.imdbID)
            .map((item, i) => (
                <MovieSimilarCard
                  key={i + 1000}
                  movie={item}
                  titleToShow={(param) => setTitle(param)}
                />
            ))}
      </SimilarContainer>
    </Fragment>
  ) : null 
};

export default SimilarContent;
