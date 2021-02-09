import React from "react";
import Paper from "../../containers/Paper";
import FilterTypePanel from "../UserActionBars/FilterTypePanel";
import TopContent from "../Contents/TopContent";
import Typography from "../material_ui/Typography";
import Layout from "../Layout";

const Top = ({ top_movies }) => (
  <>
    <Paper>
      <Typography variant="h5">TOP rated productions</Typography>
      <FilterTypePanel filter={() => false}/>
    </Paper>
    <TopContent top_movies={top_movies} />
  </>
);

export default Top;
