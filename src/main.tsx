import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import { Providers } from "./providers";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <Providers>
      <CssBaseline />
      <App />
    </Providers>
  </StrictMode>,
);
