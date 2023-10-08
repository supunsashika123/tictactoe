import React from "react";
import Grid from "@mui/material/Grid";

const Cell = ({ index }) => {
  return (
    <Grid item xs={4} key={index}>
      <div style={{ border: "1px solid black", height: "100px" }}></div>
    </Grid>
  );
};

export default Cell;
