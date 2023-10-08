import winningLines from "../constants/winningLines";

const checkBoardStateForWinner = (board) => {
  for (let line of winningLines) {
    if (
      board[line[0]] &&
      board[line[0]] === board[line[1]] &&
      board[line[0]] === board[line[2]]
    ) {
      return { winner: board[line[0]], winningLine: line };
    }
  }

  if (board.every((cell) => cell !== null)) {
    return { winner: "Tie", winningLine: null };
  }

  return { winner: null, winningLine: null };
};

export { checkBoardStateForWinner };
