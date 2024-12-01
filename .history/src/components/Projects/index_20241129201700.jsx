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
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
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
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                "background-image":
                  "url(https://swiperjs.com/demos/images/nature-1.jpg)",
              }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
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
                <div className="portfolio-carousel">
                  <div className="img-slide">
                    <img src={project.img} alt={project.title} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ))}
      </div>
    </section>
  );
}
