import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Cell = ({ value, onClick, highlight, index }) => {
  return (
    <Grid item xs={4}>
      <Button
        data-testid={`cell-${index}`}
        variant="outlined"
        onClick={onClick}
        disabled={!!value}
        sx={{
          width: 100,
          height: 100,
          fontSize: "24px",
          borderColor: highlight ? "red !important" : undefined,
          borderWidth: highlight ? "3px !important" : "1px",
          borderStyle: "solid",
        }}
      >
        {value}
      </Button>
    </Grid>
  );
};

export default Cell;
