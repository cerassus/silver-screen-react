import React from "react";
import Typography from "../material_ui/Typography"
import Paper from "../../containers/Paper"
import Layout from "../Layout";

const NotFound = () => {
  return (
    <>
      <Paper>
        <Typography variant="h5">Something went wrong...</Typography>
      </Paper>
      <Paper content>
        <Typography variant="h4">There is nothing to show (404)</Typography>
      </Paper>
    </>
  );
};

export default NotFound;

