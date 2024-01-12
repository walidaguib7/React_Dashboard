import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "../src/theme";
import TopBar from "./pages/global/TopBar";

function App() {
  const { theme, toggleColorMode } = useMode();

  return (
    <ColorModeContext.Provider value={{ theme, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="content">
            <TopBar />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
