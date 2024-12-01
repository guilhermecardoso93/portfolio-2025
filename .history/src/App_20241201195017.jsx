import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Services } from "./components/Serv";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export function App() {
  

  return (
    <Router>
      <div class="bars-box active">
        <div class="bar" style="--i: 0.1"></div>
        <div class="bar" style="--i: 0.2"></div>
        <div class="bar" style="--i: 0.3"></div>
        <div class="bar" style="--i: 0.4"></div>
        <div class="bar" style="--i: 0.5"></div>
      </div>
      <Navbar />
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
