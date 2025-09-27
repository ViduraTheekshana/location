import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./AppRouter";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<AppRouter />);
}
