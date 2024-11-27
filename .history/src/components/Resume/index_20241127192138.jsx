import { useState } from "react";
import "./styles.css";
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
        {activeTab === "Experience" && (
          <div className="resume-details experience">
            <h2 className="heading">
              My <span>Experience</span>
            </h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}

        {activeTab === "Education" && (
          <div className="resume-details education">
            <h2 className="heading">
              My <span>Education</span>
            </h2>
            <p className="desc">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        )}

        {activeTab === "Skills" && (
          <div className="resume-details skills">
            <h2 className="heading">
              My <span>Skills</span>
            </h2>
            <p className="desc">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
          </div>
        )}

        {activeTab === "About Me" && (
          <div className="resume-details about-me">
            <h2 className="heading">
              About <span>Me</span>
            </h2>
            <p className="desc">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </p>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}