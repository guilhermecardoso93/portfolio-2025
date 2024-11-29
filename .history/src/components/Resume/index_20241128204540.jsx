import { useState } from "react";
import "./styles.css";
import { Instagram } from "lucide-react";
export function Resume() {
  const [activeTab, setActiveTab] = useState("Experience"); // Estado para rastrear o botão ativo
  return (
    <section className="resume active">
      <div className="resume-container">
        <div className="resume-box">
          <h2>Why Hire Me?</h2>
          <p className="desc">
            Lorem Ipsum is simply dummy text of Lorem Ipsum. Lorem Ipsum has
            been the.
          </p>
          <div className="resume-btns">
            <button
              className={`resume-btn ${
                activeTab === "Experience" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Experience")}
            >
              Experience
            </button>
            <button
              className={`resume-btn ${
                activeTab === "Education" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </button>
            <button
              className={`resume-btn ${activeTab === "Skills" ? "active" : ""}`}
              onClick={() => setActiveTab("Skills")}
            >
              Skills
            </button>
            <button
              className={`resume-btn ${
                activeTab === "About Me" ? "active" : ""
              }`}
              onClick={() => setActiveTab("About Me")}
            >
              About Me
            </button>
          </div>
        </div>

        <div className="resume-box">
          <div
            className={`resume-details ${
              activeTab === "Experience" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Experience</span>
            </h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="resume-list">
              <div className="resume-item">
                <p className="year">2034 - Present</p>
                <h3>Front End </h3>
                <p className="company">dshfosnfsnflçs</p>
                <p>Lorem Ipsum sjpfjmsopmfospmfpsomfomso</p>
              </div>
              <div className="resume-item">
                <p className="year">2034 - Present</p>
                <h3>Front End </h3>
                <p className="company">dshfosnfsnflçs</p>
                <p>Lorem Ipsum sjpfjmsopmfospmfpsomfomso</p>
              </div>
              <div className="resume-item">
                <p className="year">2034 - Present</p>
                <h3>Front End </h3>
                <p className="company">dshfosnfsnflçs</p>
                <p>Lorem Ipsum sjpfjmsopmfospmfpsomfomso</p>
              </div>
              <div className="resume-item">
                <p className="year">2034 - Present</p>
                <h3>Front End </h3>
                <p className="company">dshfosnfsnflçs</p>
                <p>Lorem Ipsum sjpfjmsopmfospmfpsomfomso</p>
              </div>
            </div>
          </div>

          <div
            className={`resume-details ${
              activeTab === "Education" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Education</span>
            </h2>
            <p className="desc">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div
            className={`resume-details skills ${
              activeTab === "Skills" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              My <span>Skills</span>
            </h2>
            <p className="desc">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <div className="resume-list">
              <div className="resume-item">
                <Instagram size={136} className="skills-icon" />
                <span>instagram</span>
              </div>
              <div className="resume-item">
                <Instagram size={136} className="skills-icon" />
                <span>instagram</span>
              </div>
              <div className="resume-item">
                <Instagram size={136} className="skills-icon" />
                <span>instagram</span>
              </div>
              <div className="resume-item">
                <Instagram size={136} className="skills-icon" />
                <span>instagram</span>
              </div>
              <div className="resume-item">
                <Instagram size={136} className="skills-icon" />
                <span>instagram</span>
              </div>
              <div className="resume-item">
                <Instagram size={136} className="skills-icon" />
                <span>instagram</span>
              </div>
              <div className="resume-item">
                <Instagram size={136} className="skills-icon" />
                <span>instagram</span>
              </div>
            </div>
          </div>

          <div
            className={`resume-details ${
              activeTab === "About Me" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              About <span>Me</span>
            </h2>
            <p className="desc">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
