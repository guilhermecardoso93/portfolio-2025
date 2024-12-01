import './styles.css'
import projects from "./projects-list";
export function Projects() {
  return (
    <section className=" projects active">
      <h2 className="heading">
        Últimos <span>Projetos</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          {projects.map((index, project) => {
            <div className="portfolio-detail" key={index}>
              <p className="numb">{index}</p>;
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}
