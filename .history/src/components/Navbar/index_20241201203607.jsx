import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import "./styles.css";

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
      <nav className={`nav-menu ${isMobileMenuOpen ? "show-mobile-menu" : ""}`}>
        <button id="menu-close-button" onClick={toggleMobileMenu}>
          <Menu id="menu-icon" />
        </button>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "active" : ""}
        >
          Services
        </Link>
        <Link
          to="/resume"
          className={location.pathname === "/resume" ? "active" : ""}
        >
          Resume
        </Link>
        <Link
          to="/projetos"
          className={location.pathname === "/projetos" ? "active" : ""}
        >
          Projetos
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
