import React from "react";
import { createRoot } from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjW39bcXZRQmJeV0xwVw=="
);

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
