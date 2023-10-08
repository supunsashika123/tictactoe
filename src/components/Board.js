import React from "react";
import Grid from "@mui/material/Grid";
import Cell from "./Cell";

const Board = () => {
  return (
    <Grid container spacing={1}>
      {[...Array(9)].map((_, index) => (
        <Cell index={index} />
      ))}
    </Grid>
  );
};

export default Board;
