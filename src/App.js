import Container from "@mui/material/Container";
import Board from "./components/Board";
import Title from "./components/Title";

function App() {
  return (
    <Container>
      <Title text="Tic Tac Toe" />
      <Board />
    </Container>
  );
}

export default App;
