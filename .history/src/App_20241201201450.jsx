import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Services } from "./components/Serv";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export function App() {
  const [isBarsActive, setIsBarsActive] = useState(false);
  const location = useLocation(); // Detecta rota atual

  useEffect(() => {
    setIsBarsActive(true); // Ativa a animação
    const timer = setTimeout(() => setIsBarsActive(false), 1600); // Desativa após 1.6s
    return () => clearTimeout(timer);
  }, [location]); // Reexecuta sempre que a rota mudar

  const bars = Array.from({ length: 6 }, (_, i) => i + 1); // Cria array [1, 2, 3, 4, 5, 6]

  return (
    <>
      <Navbar />
      {isBarsActive && (
        <div className="bars-box active">
          {bars.map((i) => (
            <div className="bar" style={{ "--i": i }} key={i}></div>
          ))}
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
