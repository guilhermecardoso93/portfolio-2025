import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import "./styles.css";
export function Navbar() {
  return (
    <header>
      <Link to="/" className="logo">
        Guilherme C.
      </Link>

      <Menu id="menu-icon" />
      <nav>
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/services" className="active">
        Services
        </Link>
        <Link to="/resume" className="active">
        Resume
        </Link>
        <Link to="/projetos" className="active">
        Projetos
        </Link>
        <Link to="/contato" className="active">
        Contato
        </Link>
        
      </nav>
    </header>
  );
}
