import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Cell from "./Cell";
import { useTicTacToe } from "../hooks/useTicTacToe";

const Board = () => {
  const { boardState, winningLine, makeMove, message } = useTicTacToe();

  const handleCellClick = (index) => {
    makeMove(index);
  };

  return (
    <Box>
      <Typography variant="h6" align="center" gutterBottom>
        {message}
      </Typography>
      <Box display="flex" justifyContent="center" width="100%">
        <Grid container spacing={2} sx={{ maxWidth: 350 }}>
          {boardState.map((cellValue, index) => (
            <Cell
              key={index}
              value={cellValue}
              onClick={() => handleCellClick(index)}
              highlight={winningLine && winningLine.includes(index)}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Board;
