import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./allComponents/App.jsx";
import {ThemeProvider} from "./allComponents/theme.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
