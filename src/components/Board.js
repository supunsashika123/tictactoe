import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Cell from "./Cell";
import RestartButton from "./RestartButton";
import { useTicTacToe } from "../hooks/useTicTacToe";

const Board = () => {
  const { boardState, winningLine, makeMove, message, restartGame, isTie } =
    useTicTacToe();

  const handleCellClick = (index) => {
    makeMove(index);
  };

  const handleRestartClick = () => {
    restartGame();
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

      {(winningLine || isTie) && (
        <RestartButton text="Play Again" onClick={handleRestartClick} />
      )}
    </Box>
  );
};

export default Board;
