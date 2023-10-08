import winConditions from "../constants/winConditions";

const checkWinner = (boardState) => {
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

export default checkWinner;
