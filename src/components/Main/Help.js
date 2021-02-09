import React from "react";
import Typography from "../material_ui/Typography";
import Paper from "../../containers/Paper";
import HelpContent from "../material_ui/Help";

const Help = () => {
  return (
    <>
      <Paper>
        <Typography variant="h5">Help</Typography>
      </Paper>
      <Paper content>
        <HelpContent />
      </Paper>
    </>
  );
};

export default Help;
