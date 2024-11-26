import { Github, Instagram, Linkedin, MessageCircleHeart } from "lucide-react";
import "/styles.css";

export function Footer() {
  return (
    <footer>
      <div className="btn-sci">
        <a href="/" className="btn">
          Download CV
        </a>
        <div className="sci">
          <a href="https://github.com/guilhermecardoso93/" target="_blank">
            <Github />
          </a>
          <a href="https://www.instagram.com/guicardoso93" target="_blank">
            <Instagram />
          </a>
          <a href="" target="_blank">
            <Linkedin />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!">
            <MessageCircleHeart />
          </a>
        </div>
      </div>
    </footer>
  );
}
