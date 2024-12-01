import { Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="contact active">
      <div className="contact-container">
        <h2>
          Let's Work <span>Together</span>
        </h2>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipissik.
        </p>
        <div className="contact-detail">
          <div className="detail">
            <Phone />
            <p>+55 22 99904-7309</p>
          </div>
        </div>
      </div>
    </section>
  );
}
