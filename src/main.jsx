import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import {  HashRouter } from "react-router-dom";
import "./fonts/Lohit-Devanagari.ttf";
import { LanguageProvider } from "./components/language/Language.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </LanguageProvider>
);
