import { Swiper, SwiperSlide } from "swiper/react";
import { Github, Monitor } from "lucide-react";
import { projects } from "./projects-list";

import "./styles.css";
export function Projects() {
  return (
    <section className="projects active">
      <h2 className="heading">
        Últimos <span>Projetos</span>
      </h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="portfolio-box">
              <div className="portfolio-detail active">
                <p className="numb">{index + 1}</p>
                <h3 className="project-title">{project.title}</h3>{" "}
                <div className="tech">
                  <a href={project.repo} target="_blank">
                    <Github size={30} />
                  </a>
                  <a href={project.url} target="_blank">
                    <Monitor size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-box">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  {" "}
                  <div className="img-item">
                    <img src={project.img} alt={project.title} />
                  </div>
                </SwiperSlide>
                ...
              </Swiper>
              <div className="portfolio-carousel">
                <div className="img-slide"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
