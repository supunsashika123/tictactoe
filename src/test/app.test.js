import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("completes a game with X as the winner", async () => {
    render(<App />);
    const buttons = await screen.findAllByRole("button");
    const message = screen.getByTestId("message");

    // Simulate moves: Assuming 'X' starts the game
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[2]);

    expect(buttons[2].textContent).toBe("X");
    expect(message.textContent).toBe("X Wins!");

    const resetButton = screen.getByTestId("btn-restart");
    expect(resetButton).toBeInTheDocument();
  });

  it("highlights the winning line", async () => {
    render(<App />);
    const buttons = await screen.findAllByRole("button");

    // Simulate winning moves
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[2]);

    const highlightedCell = screen.getByTestId("cell-0");
    expect(highlightedCell).toHaveStyle("borderColor: red !important");
  });

  it("resets the game", async () => {
    render(<App />);
    const buttons = await screen.findAllByRole("button");

    // Simulate winning moves
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[3]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[4]);
    fireEvent.click(buttons[2]);

    expect(buttons[2].textContent).toBe("X");

    const resetButton = screen.getByTestId("btn-restart");
    fireEvent.click(resetButton);

    expect(buttons[2].textContent).toBe("");
  });
});
