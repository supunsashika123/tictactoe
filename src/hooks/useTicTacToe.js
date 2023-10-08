import { useState } from "react";
import checkBoardStateForWinner from "../utils/gameHelpers";

export const useTicTacToe = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = (latestBoardState) => {
    setWinner(checkBoardStateForWinner(latestBoardState));

    if (boardState.every((cell) => cell !== null)) {
      setWinner("Tie");
    }
  };

  const makeMove = (index) => {
    if (!boardState[index] && !winner) {
      const newBoardState = [...boardState];
      newBoardState[index] = currentPlayer;
      setBoardState(newBoardState);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      checkWinner(newBoardState);
    }
  };

  return {
    boardState,
    currentPlayer,
    winner,
    makeMove,
  };
};
