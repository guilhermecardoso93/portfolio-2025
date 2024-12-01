import "./styles.css";
import { projects } from "./projects-list";

export function Projects() {
  return (
    <section className="projects active">
      <h2 className="heading">
        Últimos <span>Projetos</span>
      </h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <div className="portfolio-detail active">
              <p className="numb">{index + 1}</p>
              <p className="project-title">{project.title}</p> {/* Exemplo de título */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
