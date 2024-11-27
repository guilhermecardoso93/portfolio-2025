import { ArrowDown } from "lucide-react";
import "./styles.css";
export function Services() {
  return (
    <section id="services active">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <div className="icon">
            <a href='#'>
              <ArrowDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
