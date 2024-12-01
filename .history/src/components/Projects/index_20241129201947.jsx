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
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className="parallax-bg"
              style={{
                backgroundImage: `url(${project.img})`,
              }}
              data-swiper-parallax="-23%"
            ></div>
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
              <div className="portfolio-carousel">
                <div className="img-slide">
                  <img src={project.img} alt={project.title} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
