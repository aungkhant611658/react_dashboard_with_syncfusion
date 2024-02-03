import React from "react";
import { createRoot } from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";

import "./index.css";
import App from "./App";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhLYVppR2Nbe05xdF9DZVZVQmYuP1ZhSXxXdkdjW35edXFRQGhUUkE="
);

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<App />);
