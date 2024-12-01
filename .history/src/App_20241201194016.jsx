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
      <Navbar />
      <div className="bars-box">
        <div className="bar" style={styles["---1:6"]}></div>
        <div className="bar" style={styles["---1:5"]}></div>
        <div className="bar" style={styles["---1:4"]}></div>
        <div className="bar" style={styles["---1:3"]}></div>
        <div className="bar" style={styles["---1:2"]}></div>
        <div className="bar" style={styles["---1:1"]}></div>
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
