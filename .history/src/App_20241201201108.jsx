import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Services } from "./components/Serv";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export function App() {
  const [isBarsActive, setIsBarsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsBarsActive(false), 1100); // Remove após 1.6s
    return () => clearTimeout(timer); // Limpa o timeout
  }, []);

  return (
    <Router>
      <Navbar />
      {isBarsActive && (
        <div className="bars-box active">
          <div className="bar" style={{ "--i": 1 }}></div>
          <div className="bar" style={{ "--i": 2 }}></div>
          <div className="bar" style={{ "--i": 3 }}></div>
          <div className="bar" style={{ "--i": 4 }}></div>
          <div className="bar" style={{ "--i": 5 }}></div>
          <div className="bar" style={{ "--i": 6 }}></div>
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
    </Router>
  );
}
