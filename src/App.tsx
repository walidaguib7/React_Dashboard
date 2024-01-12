import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "../src/theme";
import TopBar from "./pages/global/TopBar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Faq from "./pages/FAQ";
import Pie from "./pages/Pie";
import Bar from "./pages/bar";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Invoices from "./pages/invoices";
import Line from "./pages/line";
import Geo from "./pages/Geo";
import { Route, Routes } from "react-router-dom";

function App() {
  const { theme, toggleColorMode } = useMode();

  return (
    <ColorModeContext.Provider value={{ theme, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/" element={<Invoices />} />
              <Route path="/" element={<Faq />} />
              <Route path="/" element={<Contacts />} />
              <Route path="/" element={<Form />} />
              <Route path="/" element={<Pie />} />
              <Route path="/" element={<Bar />} />
              <Route path="/" element={<Line />} />
              <Route path="/" element={<Geo />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
