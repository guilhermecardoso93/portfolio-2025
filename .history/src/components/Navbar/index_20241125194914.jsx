import "./styles.css";
export function Navbar() {
  return (
    <header>
      <a href="/" className="logo">
        Guilherme Cardoso
      </a>
      <nav>
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Resume</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </nav>
    </header>
  );
}
