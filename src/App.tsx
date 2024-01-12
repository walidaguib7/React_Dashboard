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
import NavBar from "./pages/global/NavBar";

function App() {
  const { theme, toggleColorMode } = useMode();

  return (
    <ColorModeContext.Provider value={{ theme, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <NavBar />
          <div className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geo" element={<Geo />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
