import { createTheme, ThemeProvider } from "@mui/material/styles";
import Board from "./components/Board";
import Title from "./components/Title";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff9100",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title text="Tic Tac Toe" />
      <Board />
    </ThemeProvider>
  );
}

export default App;
