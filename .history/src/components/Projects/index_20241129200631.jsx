import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Github, Monitor } from "lucide-react";
import { projects } from "./projects-list";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import "./styles.css";
export function Projects() {
  return (
    <section className="projects active">
      <h2 className="heading">
        Últimos <span>Projetos</span>
      </h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
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
                <div className="portfolio-box"></div>
              </div>
              <div className="portfolio-carousel">
                <div className="img-slide"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        ))}
      </div>
    </section>
  );
}