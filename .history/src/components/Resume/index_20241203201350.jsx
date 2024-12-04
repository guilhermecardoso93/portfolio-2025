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
              Educação
            </button>
            <button
              className={`resume-btn ${activeTab === "Skills" ? "active" : ""}`}
              onClick={() => setActiveTab("Skills")}
            >
              Habilidades
            </button>
            <button
              className={`resume-btn ${
                activeTab === "About Me" ? "active" : ""
              }`}
              onClick={() => setActiveTab("About Me")}
            >
              Sobre mim
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
                <p className="desc-func">
                  Aqui está um resumo básico das suas responsabilidades:
                  <span>
                    <strong>Lançamento e Recebimento de Notas Fiscais </strong>
                    :Responsável pelo lançamento de notas fiscais no sistema SD,
                    garantindo a precisão dos dados fiscais e conformidade com a
                    legislação.
                  </span>
                  <span>
                    <strong>Conferencia</strong>: Realizo a conferência e
                    validação de notas fiscais eletrônicas (NF-e) para assegurar
                    o correto registro das transações.
                  </span>
                  <span>
                    <strong>Contas a Pagar</strong>: Gerencio o processo de
                    contas a pagar, desde a conferência das notas fiscais até o
                    agendamento de pagamentos, respeitando os prazos
                    estabelecidos. Recebimento de Mercadorias Responsável pela
                    conferência de mercadorias, garantindo que os produtos
                    recebidos atendam às especificações e quantidades descritas
                    nos pedidos de compra. Faço a interface com o departamento
                    de compras e estoque e corrijo divergências entre notas
                    fiscais e mercadorias.
                  </span>
                  <span>
                    <strong>Departamento Pessoal (Tarefas Básicas)</strong>:
                    Atuo na administração de processos de admissão e demissão de
                    funcionários, controle de ponto eletrônico, atualização de
                    cadastros e organização de documentação trabalhista,
                    incluindo folha de pagamento, férias e décimo terceiro
                  </span>
                </p>
              </div>
              <div className="resume-item">
                <div>
                  <p className="year">MAI/2012 - DEZ/2024</p>
                  <h3>Auxiliar Administrativo </h3>
                  <p className="company">Supermercado Barcelos Ltda.</p>
                </div>
                <div>
                  <p className="year">OUT/2011 - ABR/2012</p>
                  <h3>Auxiliar Administrativo </h3>
                  <p className="company">Supermercado Barcelos Ltda.</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`resume-details ${
              activeTab === "Education" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              <span>Educação</span>
            </h2>
            <p className="desc">Meus Cursos e Atividades</p>
            <div className="cursos">
              <div className="resume-item">
                <p className="year">FEV/2024 - OUT/2024</p>
                <h3>Especialização Front-End</h3>
                <p className="company">ALURA | ORACLE</p>
              </div>
              <div className="resume-item">
                <p className="year">JUN/2021 - JUN/2023</p>
                <h3>ReactJS | React Native</h3>
                <p className="company">ROCKETSEAT</p>
              </div>
              <div className="resume-item">
                <p className="year">JAN/2021 - DEZ/2022</p>
                <h3>Javascript | HTML5 | CSS3 </h3>
                <p className="company">Curso em Vídeo</p>
              </div>
              <div className="resume-item">
                <p className="year">JAN/2020 - DEZ/2020</p>
                <h3>Front-End</h3>
                <p className="company">IMAGINE SCHOOL</p>
              </div>
              <div className="resume-item">
                <p className="year">MAI/2019 - DEZ/2021</p>
                <h3>Técnico em Logística </h3>
                <p className="company">UNOPAR</p>
              </div>
              <div className="resume-item">
                <p className="year">JAN/2011 - DEZ/2016</p>
                <h3>Inglês</h3>
                <p className="company">CNA</p>
              </div>
            </div>
          </div>

          <div
            className={`resume-details skills ${
              activeTab === "Skills" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              <span>Habilidades</span>
            </h2>
            <p className="desc">Minhas habilidades diversas.</p>
            <div className="resume-list">
              <div className="habilidades">
                <p className="company">Paciência</p>
                <p className="company">Aprendizagem Rápida</p>
                <p className="company">Organização</p>
                <p className="company">Criatividade Prática</p>
                <p className="company">Esperteza</p>
                <p className="company">Prestativo</p>
              </div>
              <div className="habilidades">
                <p className="company">
                  Conhecimento muito avançado em informática em Office até em
                  consertar periféricos.
                </p>
                <p className="company">
                  Já fui professor com 15 anos de informática, ensinava Flash,
                  CorelDraw e Photoshop.
                </p>{" "}
                <p className="company">
                  Falo Inglês, fiz curso de 5 Anos. Tenho Certificado Cambridge. Quero 
                  Muito aprender Coreano.
                </p>{" "}
              </div>
            </div>
          </div>

          <div
            className={`resume-details about ${
              activeTab === "About Me" ? "active" : ""
            }`}
          >
            <h2 className="heading">
              Sobre <span>Mim</span>
            </h2>
            <p className="desc">
             Alguns fatos e curiosidades
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
                  <span>Homem</span>
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
