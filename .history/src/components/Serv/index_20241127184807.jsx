import { ArrowDown, BriefcaseBusiness } from "lucide-react";
import "./styles.css";
export function Services() {
  return (
    <section id="services active">
      <h2 className="heading">
        My <span>Services</span>
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
              <ArrowDown size={36} />
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
