import { useState } from "react";
import "./styles.css";
import { Instagram } from "lucide-react";
export function Resume() {
  const [activeTab, setActiveTab] = useState("Experience"); // Estado para rastrear o botão ativo

  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  };

  const idade = calcularIdade("1993-10-24");
  return (
    <section className="resume active">
      <div className="resume-container">
        <div className="resume-box">
          <h2>Currículo</h2>
          <p className="desc">
            Experiencia de trabalho, histórico de educação, habilidades e pouco
            sobre mim.
          </p>
          <div className="resume-btns">
            <button
              className={`resume-btn ${
                activeTab === "Experience" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Experience")}
            >
              Últimos Trabalhos
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
              Meu <span>histórico</span>
            </h2>
            <p className="desc">Segue minhas informações:</p>
            <div className="resume-list">
              <div className="resume-item">
                <p className="year">JAN/2015 - DEZ/2024</p>
                <h3>Assistente administrativo </h3>
                <p className="company">Supermercado Barcelos Ltda.</p>
                <p>
                  Aqui está um resumo básico das suas responsabilidades:
                  Lançamento e Recebimento de Notas Fiscais Responsável pelo
                  lançamento de notas fiscais no sistema SD, garantindo a
                  precisão dos dados fiscais e conformidade com a legislação.
                  Realizo a conferência e validação de notas fiscais eletrônicas
                  (NF-e) para assegurar o correto registro das transações.
                  Contas a Pagar Gerencio o processo de contas a pagar, desde a
                  conferência das notas fiscais até o agendamento de pagamentos,
                  respeitando os prazos estabelecidos. Recebimento de
                  Mercadorias Responsável pela conferência de mercadorias,
                  garantindo que os produtos recebidos atendam às especificações
                  e quantidades descritas nos pedidos de compra. Faço a
                  interface com o departamento de compras e estoque e corrijo
                  divergências entre notas fiscais e mercadorias. Departamento
                  Pessoal (Tarefas Básicas) Atuo na administração de processos
                  de admissão e demissão de funcionários, controle de ponto
                  eletrônico, atualização de cadastros e organização de
                  documentação trabalhista, incluindo folha de pagamento, férias
                  e décimo terceiro
                </p>
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
                <span>instagram</span>
                <Instagram size={136} className="skills-icon" />
              </div>
              <div className="resume-item">
                <span>instagram</span>
                <Instagram size={136} className="skills-icon" />
              </div>
              <div className="resume-item">
                <span>instagram</span>
                <Instagram size={136} className="skills-icon" />
              </div>
              <div className="resume-item">
                <span>instagram</span>
                <Instagram size={136} className="skills-icon" />
              </div>
              <div className="resume-item">
                <span>instagram</span>
                <Instagram size={136} className="skills-icon" />
              </div>
              <div className="resume-item">
                <span>instagram</span>
                <Instagram size={136} className="skills-icon" />
              </div>
              <div className="resume-item">
                <span>instagram</span>
                <Instagram size={136} className="skills-icon" />
              </div>
              <div className="resume-item">
                <span>instagram</span>
                <Instagram size={136} className="skills-icon" />
              </div>
            </div>
          </div>

          <div
            className={`resume-details about ${
              activeTab === "About Me" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              About <span>Me</span>
            </h2>
            <p className="desc">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </p>
            <div className="resume-list">
              <div className="resume-item">
                <p>
                  {" "}
                  Nome:
                  <span>Guilherme Cardoso da Silva</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  Gênero:
                  <span>Male</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  Idade:
                  <span>{idade} </span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  Status:
                  <span>Solteiro </span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  Cidade:
                  <span>São Paulo | Curitiba </span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  Nacionalidade:
                  <span>Brasileiro </span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  Telefone:
                  <span>+55 22 99904-7309</span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  E-mail:
                  <span>guilherme_cardosogui@hotmail.com </span>
                </p>
              </div>
              <div className="resume-item">
                <p>
                  {" "}
                  idiomas:
                  <span>Português | English </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}