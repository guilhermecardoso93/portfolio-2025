import { useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';

import "./styles.css";

export function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Guilherme Cardoso",
          from_email: form.email,
          to_email: "guilherme_cardosogui@gotmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Muito Obrigado. Já te respondo!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Alguma coisa saiu errado!");
        }
      );
  }
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

        <div className="contact-box">
          <div className="contact-container">
            <div className="contact-form-container">
              <h4 className="contact-title">Contato</h4>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <label className="form-label">
                  <span>Nome</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Qual seu Nome?"
                    className="form-input"
                  />
                </label>

                <label className="form-label">
                  <span>E-mail</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Qual seu e-mail?"
                    className="form-input"
                  />
                </label>

                <label className="form-label">
                  <span>Mensagem</span>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tem alguma mensagem?"
                    className="form-textarea"
                  />
                </label>

                <button type="submit" className="form-button">
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
