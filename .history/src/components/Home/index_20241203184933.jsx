import {
  Github,
  Instagram,
  Linkedin,
  MailIcon,
  MessageCircleHeart,
  Twitter,
} from "lucide-react";
import img from "../../assets/foto.png";
import "./styles.css";

export function Home() {
  return (
    <section className="home">
      <div className="home-detail">
        <h1 id="ui">
          <span style={{ "--i": 2 }} data-text="Guilherme">
            Guilherme
          </span>
          <span style={{ "--i": 1 }} data-text="Cardoso">
            Cardoso
          </span>
        </h1>

        <h2>Eu sou um Dev. Front-End Júnior</h2>
        <p>
          Olá! Sou Guilherme, tenho 31 anos e estou em busca de novas
          oportunidades profissionais. Atualmente, estou focado em cargos de
          Assistente Administrativo e Desenvolvedor Front-End Júnior (React).
          Tenho disponibilidade para atuar em São Paulo, a partir de janeiro de
          2025. Iniciei minha trajetória profissional em 2010, na mesma empresa,
          onde comecei como repositor e, ao longo dos anos, cresci dentro da
          organização, passando para a área administrativa. <br />
          Nessa jornada, evoluí de auxiliar administrativo para assistente
          administrativo, função que me permitiu aprender e desenvolver diversas
          habilidades importantes na área. Além disso, durante minha
          adolescência, dei aulas de informática, o que me proporcionou um
          conhecimento sólido e acima da média em tecnologia, algo que utilizo
          no meu dia a dia e que me impulsionou a buscar uma carreira em
          desenvolvimento front-end e na área administrativa. Ficarei muito
          grato por qualquer apoio ou oportunidade que me permita continuar
          evoluindo e contribuindo em novos desafios!
        </p>
        <div className="btn-sci">
          <a href="/path-to-cv.pdf" className="btn" download>
            Download CV
          </a>
          <div className="sci">
            <a
              href="https://github.com/guilhermecardoso93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.instagram.com/guicardoso93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/seu-perfil-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleHeart />
            </a>
            <a
              href="mailto:guilherme_cardosogui@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon />
            </a>
            <a
              href="https://twitter.com/cardoso_gui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img
              src={img}
              alt="Imagem de Guilherme Cardoso"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
