import "./styles.css";
export function Resume() {
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
            <button className="resume-btn active">Experience</button>
            <button className="resume-btn">Education</button>
            <button className="resume-btn">Skills</button>
            <button className="resume-btn">About Me</button>
          </div>
        </div>

        <div className="resume-box">
          <div className="resume-details experience">
            <h2 className="heading">
              My <span>Experience</span>
            </h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}