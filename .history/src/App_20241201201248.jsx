import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Services } from "./components/Serv";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export function App() {
  const barsBox = document.querySelector(`.bars-box`)
  barsBox.classList.remove(`active`)
  setTimeout(() => {
    barsBox.classList.add('active')
  }, 100)
  return (
    <Router>
      <Navbar />
      <div class="bars-box active">
        <div class="bar" style={{ "--i": 1 }}></div>
        <div class="bar" style={{ "--i": 2 }}></div>
        <div class="bar" style={{ "--i": 3 }}></div>
        <div class="bar" style={{ "--i": 4 }}></div>
        <div class="bar" style={{ "--i": 5 }}></div>
        <div class="bar" style={{ "--i": 6 }}></div>
      </div>
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
