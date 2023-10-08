import { useState } from "react";
import { checkBoardStateForWinner } from "../utils/gameHelpers";

export const useTicTacToe = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);

  const checkWinner = (latestBoardState) => {
    const result = checkBoardStateForWinner(latestBoardState);
    setWinner(result.winner);
    setWinningLine(result.winningLine);
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

  const restartGame = () => {
    setBoardState(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setWinningLine(null);
  };

  let message = winner
    ? winner === "Tie"
      ? "It's a Tie!"
      : `${winner} Wins!`
    : `Turn: ${currentPlayer}`;

  return {
    boardState,
    makeMove,
    winningLine,
    message,
    restartGame,
    isTie: winner === "Tie",
  };
};
