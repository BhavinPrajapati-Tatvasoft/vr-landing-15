import { ThemeProvider } from "@mui/material";
import companyTheme from "./app.theme";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <ThemeProvider theme={companyTheme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
