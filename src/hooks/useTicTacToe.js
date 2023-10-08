import { useState } from "react";
import { checkBoardStateForWinner, isTie } from "../utils/gameHelpers";

export const useTicTacToe = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = (latestBoardState) => {
    const winner = checkBoardStateForWinner(latestBoardState);

    if (winner) {
      setWinner(winner);
      return;
    }

    if (isTie(latestBoardState)) {
      setWinner("Tie");
      return;
    }
  };

  const makeMove = (index) => {
    if (boardState[index] || winner) {
      return;
    }

    const newBoardState = [...boardState];
    newBoardState[index] = currentPlayer;
    setBoardState(newBoardState);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    checkWinner(newBoardState);
  };

  return {
    boardState,
    currentPlayer,
    winner,
    makeMove,
  };
};
