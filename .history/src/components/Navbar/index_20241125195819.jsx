import { Menu } from "lucide-react";
import "./styles.css";
export function Navbar() {
  return (
    <header>
      <a href="/" className="logo">
        Guilherme C.
      </a>

      <Menu className="menu-icon"/>
      <nav>
        <a href="" className="active">
          Home
        </a>
        <a href="">Services</a>
        <a href="">Resume</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </nav>
    </header>
  );
}
