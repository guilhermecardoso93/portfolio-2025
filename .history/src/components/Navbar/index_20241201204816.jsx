import { Link, useLocation } from "react-router-dom";
import { AlignJustify, Menu, X } from "lucide-react";
import "./styles.css";
import { useState } from "react";

export function Navbar() {
  const location = useLocation(); // Obter o caminho atual
  // Estado para controlar a visibilidade do menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Alternar o estado do menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("show-mobile-menu", !isMobileMenuOpen); // Para adicionar/remover a classe no body
  };

  return (
    <header className="active">
      <Link to="/" className="logo">
        Guilherme C.
      </Link>

      {/* Menu com classe condicional */}

      <nav className="navbar section-content">
        {/* Menu com classe condicional */}
        <ul
          className={`nav-menu ${isMobileMenuOpen ? "show-mobile-menu" : ""}`}
        >
          <button id="menu-close-button" onClick={toggleMobileMenu}>
            <X color="black" size={40} />
          </button>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          <li className="nav-item">
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projetos"
              className={location.pathname === "/projetos" ? "active" : ""}
            >
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contato
            </Link>
          </li>
        </ul>
        {/* Botão para abrir o menu */}
        <button id="menu-open-button" onClick={toggleMobileMenu}>
          <AlignJustify color="white" size={40} />
        </button>
      </nav>
    </header>
  );
}
