import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Cell from "./Cell";
import checkWinner from "../utils/gameHelpers";

const Board = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleCellClick = (index) => {
    if (!boardState[index]) {
      const newBoardState = [...boardState];
      newBoardState[index] = currentPlayer;

      setBoardState(newBoardState);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const winner = checkWinner(boardState);
  if (winner) {
    alert(`${winner} wins!`);
  }

  const isTie = boardState.every((cell) => cell !== null);
  if (isTie) {
    alert("It's a tie!");
  }

  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        {winner ? `${winner} wins!` : `Current Player: ${currentPlayer}`}
      </Typography>
      <Grid container spacing={1}>
        {boardState.map((cellValue, index) => (
          <Cell
            index={index}
            value={cellValue}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </Grid>
    </>
  );
};

export default Board;
