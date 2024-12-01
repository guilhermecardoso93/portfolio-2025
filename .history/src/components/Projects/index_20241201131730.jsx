import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Github, Monitor } from "lucide-react";
import { projects } from "./projects-list";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

export function Projects() {
  return (
    <section className="projects active">
      <h2 className="heading">
        Últimos <span>Projetos</span>
      </h2>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}  className="mySwiper">
            <div className="portfolio-box">
              <div className="portfolio-detail active">
                <p className="numb">{index + 1}</p>
                <h3 className="project-title">{project.title}</h3>
                <div className="tech">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={30} />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Monitor size={30} />
                  </a>
                </div>
              </div>
              <div className="img-slide">
                <img src={project.img} alt={project.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
