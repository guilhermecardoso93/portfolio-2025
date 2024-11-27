import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import "./styles.css";

export function Navbar() {
  const location = useLocation(); // Obter o caminho atual

  return (
    <header>
      <Link to="/" className="logo">
        Guilherme C.
      </Link>

      <Menu id="menu-icon" />
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
          Services
        </Link>
        <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>
          Resume
        </Link>
        <Link to="/projetos" className={location.pathname === "/projetos" ? "active" : ""}>
          Projetos
        </Link>
        <Link to="/contato" className={location.pathname === "/contato" ? "active" : ""}>
          Contato
        </Link>
      </nav>
    </header>
  );
}
