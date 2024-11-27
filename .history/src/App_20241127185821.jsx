import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Services } from "./components/Serv";
import { Footer } from "./components/Footer";
import { Resume } from "./components/Resume";
export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
      <Footer />
    </Router>
  );
}
