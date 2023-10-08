import { checkBoardStateForWinner } from "../../utils/gameHelpers";

describe("checkBoardStateForWinner", () => {
  it("identifies a horizontal winning condition for O", () => {
    const board = [null, null, null, "O", "O", "O", null, null, null];
    const result = checkBoardStateForWinner(board);
    expect(result.winner).toBe("O");
    expect(result.winningLine).toEqual([3, 4, 5]);
  });

  it("identifies a vertical winning condition for X", () => {
    const board = ["X", null, null, "X", "O", "O", "X", null, null];
    const result = checkBoardStateForWinner(board);
    expect(result.winner).toBe("X");
    expect(result.winningLine).toEqual([0, 3, 6]);
  });

  it("identifies a diagonal winning condition for O", () => {
    const board = ["O", "X", "X", "X", "O", "O", null, null, "O"];
    const result = checkBoardStateForWinner(board);
    expect(result.winner).toBe("O");
    expect(result.winningLine).toEqual([0, 4, 8]);
  });

  it("identifies a tie when all cells are filled without a winner", () => {
    const board = ["O", "X", "O", "O", "X", "X", "X", "O", "O"];
    const result = checkBoardStateForWinner(board);
    expect(result.winner).toBe("Tie");
    expect(result.winningLine).toBeNull();
  });

  it("returns null for both winner and winningLine when game is ongoing", () => {
    const board = ["O", "X", "O", null, "X", "O", null, null, null];
    const result = checkBoardStateForWinner(board);
    expect(result.winner).toBeNull();
    expect(result.winningLine).toBeNull();
  });

  it("returns null for both winner and winningLine for an empty board", () => {
    const board = [null, null, null, null, null, null, null, null, null];
    const result = checkBoardStateForWinner(board);
    expect(result.winner).toBeNull();
    expect(result.winningLine).toBeNull();
  });
});
