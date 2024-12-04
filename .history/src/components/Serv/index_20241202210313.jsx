import { ArrowDown, ArrowUp, BriefcaseBusiness } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles.css";
export function Services() {
  const technologies = [
    {
      name: "HTML 5",
      icon: <FontAwesomeIcon icon={faHtml5} />,
    },
    {
      name: "CSS 3",
      icon: <FontAwesomeIcon icon="fa-brands fa-css" />,
    },
    {
      name: "JavaScript",
      icon: <FontAwesomeIcon icon="fa-brands fa-js" />,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: <FontAwesomeIcon icon="fa-brands fa-react" />,
    },
    {
      name: "React Native",
      icon: <FontAwesomeIcon icon="fa-brands fa-react" />,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },

    {
      name: "git",
      icon: git,
    },
    {
      name: "sass",
      icon: sass,
    },
    {
      name: "styled component",
      icon: stylecomp,
    },
  ];

  return (
    <section id="services active">
      <h2 className="heading">
        Conhecimento em <span>Tecnologias</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <div className="icon">
            <BriefcaseBusiness />
            <a href="#">
              <ArrowDown size={42} />
            </a>
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem Ipsum is Lorem Ipsum and it is used in several versions of
            Lorem Ipsum.
          </p>
        </div>
        <div className="services-box">
          <div className="icon">
            <BriefcaseBusiness />
            <a href="#">
              <ArrowDown size={42} />
            </a>
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem Ipsum is Lorem Ipsum and it is used in several versions of
            Lorem Ipsum.
          </p>
        </div>
        <div className="services-box">
          <div className="icon">
            <BriefcaseBusiness />
            <a href="#">
              <ArrowUp size={36} />
            </a>
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem Ipsum is Lorem Ipsum and it is used in several versions of
            Lorem Ipsum.
          </p>
        </div>
        <div className="services-box">
          <div className="icon">
            <BriefcaseBusiness />
            <a href="#">
              <ArrowDown size={42} />
            </a>
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem Ipsum is Lorem Ipsum and it is used in several versions of
            Lorem Ipsum.
          </p>
        </div>
        <div className="services-box">
          <div className="icon">
            <BriefcaseBusiness />
            <a href="#">
              <ArrowDown size={42} />
            </a>
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem Ipsum is Lorem Ipsum and it is used in several versions of
            Lorem Ipsum.
          </p>
        </div>
        <div className="services-box">
          <div className="icon">
            <BriefcaseBusiness />
            <a href="#">
              <ArrowDown size={42} />
            </a>
          </div>
          <h3>Web Development</h3>
          <p>
            Lorem Ipsum is Lorem Ipsum and it is used in several versions of
            Lorem Ipsum.
          </p>
        </div>{" "}
      </div>
    </section>
  );
}
