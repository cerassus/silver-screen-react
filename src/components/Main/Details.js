import React, { useState, useEffect } from "react";
import SimilarContent from "../Contents/SimilarContent";
import DetailsContent from "../Contents/DetailsContent";
import Typography from "../material_ui/Typography";
import Paper from "../../containers/Paper";
import useFetchGet from "../../useFetchGet";

const Details = ({ movie_id, switchLoader, recentSearchResponse, ...rest }) => {
  const { response, error, loading } = useFetchGet(`movieDetails?id=${movie_id}`)
  useEffect(() => {
    switchLoader()
  }, [loading])
  return (
    <>
      <Paper>
        <Typography center variant="h4" >{response.title || "Error"}</Typography>
      </Paper>
      <DetailsContent movie_details={response} error={error} />
      {/* <SimilarContent recentSearchResponse={recentSearchResponse} movie_details={response} /> */}
    </>
  )
}

export default Details;