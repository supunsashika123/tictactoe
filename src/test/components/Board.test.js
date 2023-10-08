import { render, fireEvent, screen } from "@testing-library/react";
import Board from "../../components/Board";

describe("Board Component", () => {
  it("updates the board state on cell click", () => {
    render(<Board />);
    const button = screen.getByTestId("cell-0");
    fireEvent.click(button);

    expect(button.textContent).toBe("X");
  });
});
