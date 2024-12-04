import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Github, Monitor } from "lucide-react";
import { projects } from "./projects-list";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export function Projects() {
  return (
    <section className="projects active">
      <h2 className="heading">
        Últimos <span>Projetos</span>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="portfolio-box">
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
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Monitor size={30} />
                </a>
              </div>
            </div>
            <div className="home-img">
              <div className="img-box color-change-3x">
                <div className="img-item ">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
