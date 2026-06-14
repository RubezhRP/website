import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// ✅ Восстанавливаем сохранённый путь после редиректа из 404.html
const redirect = sessionStorage.getItem('redirect');
if (redirect && redirect !== '/') {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);