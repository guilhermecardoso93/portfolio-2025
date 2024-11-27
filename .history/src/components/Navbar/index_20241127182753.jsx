import { Menu } from "lucide-react";
import "./styles.css";
export function Navbar() {
  return (
    <header>
       <Link to="/" className="logo">Guilherme C.</Link>
     

      <Menu id="menu-icon" />
      <nav>
        <a href="" className="active">
          Home
        </a>
        <a href="services">Services</a>
        <a href="">Resume</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </nav>
    </header>
  );
}
