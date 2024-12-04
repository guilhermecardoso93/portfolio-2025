import { Github, Instagram, Linkedin, MailIcon, MessageCircleHeart, Twitter } from "lucide-react";
import "./styles.css";

export function Footer() {
  return (
    <footer>
      <span>Guilherme Cardoso | 2025</span>

      <div className="sci-footer">
        <a href="https://github.com/guilhermecardoso93/" target="_blank">
          <Github />
        </a>
        <a href="https://www.instagram.com/guicardoso93" target="_blank">
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!">
          <MessageCircleHeart />
        </a>
        <a
          href="mailto:guilherme_cardosogui@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon />
        </a>
        <a
          href="https://twitter.com/cardoso_gui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </div>
    </footer>
  );
}