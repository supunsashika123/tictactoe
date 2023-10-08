import winConditions from "../constants/winConditions";

const checkBoardStateForWinner = (boardState) => {
  for (let condition of winConditions) {
    const [a, b, c] = condition;

    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a]; // return 'X' or 'O' depending on who wins
    }
  }
  return null;
};

// Check if all cells are filled then it's a tie
const isTie = (boardState) => {
  return boardState.every((cell) => cell !== null);
};

export { checkBoardStateForWinner, isTie };
