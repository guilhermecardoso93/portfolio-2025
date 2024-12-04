import { ArrowDown, ArrowUp, BriefcaseBusiness } from "lucide-react";
import {
  sass,
  stylecomp,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
} from "./tech";

import "./styles.css";

export function Services() {
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      desc: "A linguagem de marcação padrão para documentos web.",
    },
    {
      name: "CSS 3",
      icon: css,
      desc: "Estilos para criar o layout e design visual das páginas web.",
    },
    {
      name: "JavaScript",
      icon: javascript,
      desc: "Linguagem de programação para interatividade e dinamismo nas páginas.",
    },
    {
      name: "TypeScript",
      icon: typescript,
      desc: "Uma linguagem superset de JavaScript com tipagem estática.",
    },
    {
      name: "React JS",
      icon: reactjs,
      desc: "Biblioteca JavaScript para construção de interfaces de usuário dinâmicas.",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      desc: "Framework CSS utilitário para criar designs rápidos e personalizados.",
    },
    {
      name: "Node JS",
      icon: nodejs,
      desc: "Ambiente de execução JavaScript no servidor.",
    },
    {
      name: "git",
      icon: git,
      desc: "Sistema de controle de versão para gerenciar código-fonte.",
    },
    {
      name: "sass",
      icon: sass,
      desc: "Pré-processador CSS que adiciona recursos como variáveis e funções.",
    },
    {
      name: "styled component",
      icon: stylecomp,
      desc: "Biblioteca para escrever CSS dentro de componentes JavaScript em React.",
    },
  ];

  return (
    <section id="services">
      <h2 className="heading">
        Conhecimento em <span>Tecnologias</span>
      </h2>
      <div className="services-container">
        {technologies.map((item, index) => (
          <div className="services-box" key={index}>
            <div className="icon">
              <img src={item.icon} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p>
             {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
