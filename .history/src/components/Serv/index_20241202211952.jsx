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
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "React JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "git", icon: git },
    { name: "sass", icon: sass },
    { name: "styled component", icon: stylecomp },
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
              Lorem Ipsum is Lorem Ipsum and it is used in several versions of Lorem Ipsum.
            </p>
          </div>
        ))}

   
      </div>
    </section>
  );
}
