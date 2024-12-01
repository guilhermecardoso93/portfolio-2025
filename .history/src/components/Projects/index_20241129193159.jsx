import "./styles.css";
import { projects } from "./projects-list";
export function Projects() {
  return (
    <section className="projects active">
      <h2 className="heading">
        Últimos <span>Projetos</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <div className="portfolio-detail active">
            <p className="numb">1</p>;
          </div>
          
          {projects.map((index, project) => {
            <div className="portfolio-detail active" key={index}>
              <p className="numb">{index}</p>;
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}
