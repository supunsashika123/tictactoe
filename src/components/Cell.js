import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Cell = ({ value, onClick }) => {
  return (
    <Grid item xs={4}>
      <Button
        variant="outlined"
        style={{ width: "100%", height: "100px" }}
        onClick={onClick}
      >
        {value}
      </Button>
    </Grid>
  );
};

export default Cell;
