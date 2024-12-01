import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App"; // Importa o App

export function AppWrapper() {
  return (
    <Router>
      <App /> {/* Agora App está dentro do Router */}
    </Router>
  );
}
