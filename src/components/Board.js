import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Cell from "./Cell";
import { useTicTacToe } from "../hooks/useTicTacToe";

const Board = () => {
  const { boardState, currentPlayer, winner, makeMove } = useTicTacToe();

  const handleCellClick = (index) => {
    makeMove(index);
  };

  let message = winner === "Tie" ? "It's a tie!" : `${winner} wins!`;
  if (winner) {
    alert(message);
  }

  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        {winner ? `${winner} wins!` : `Current Player: ${currentPlayer}`}
      </Typography>
      <Grid container spacing={1}>
        {boardState.map((cellValue, index) => (
          <Cell
            key={index}
            value={cellValue}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </Grid>
    </>
  );
};

export default Board;
