import "./styles.css";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="contact active">
      <div className="contact-container">
        <h2 className="heading">
          Let's Work <span>Together</span>
        </h2>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipissik.
        </p>
        <div className="contact-detail">
          <Phone />
          <div className="detail">
            <p>Telefone</p>
            <p>+55 22 99904-7309</p>
          </div>
        </div>
        <div className="contact-detail">
          <Mail />
          <div className="detail">
            <p>E-mail</p>
            <p>guilherme_cardosogui@hotmail.com</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
