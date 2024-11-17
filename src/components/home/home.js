import React from "react";
import "./home.css";
import logo from './Logo.png'


const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <p className="logo">Portfólio</p>
        <ul className="botoes">
          <li className="ativo"><p>Início</p></li>
          <li><p>Sobre</p></li>
          <li><p>Portfólio</p></li>
          <li><p>Serviço</p></li>
          <li><p>Contato</p></li>
        </ul>
      </nav>

      {/* Animação de barras */}
      <div className="animacao-barras">
        <div className="barra" style={{ "--i": 6 }}></div>
        <div className="barra" style={{ "--i": 5 }}></div>
        <div className="barra" style={{ "--i": 4 }}></div>
        <div className="barra" style={{ "--i": 3 }}></div>
        <div className="barra" style={{ "--i": 2 }}></div>
        <div className="barra" style={{ "--i": 1 }}></div>
      </div>

      {/* Seção de Início */}
      <section className="inicio">
        <div className="inicio-info">
          <h1>Mobilidade Acessível</h1>
          <h2>
            Somos uma empresa{" "}
            <span style={{ "--i": 4 }} data-text="que apoia os deficientes físicos">
              que apoia os deficientes físicos
            </span>
            <span style={{ "--i": 3 }} data-text="que oferece suporte aos deficientes físicos">
              que oferece suporte aos deficientes físicos
            </span>
            <span style={{ "--i": 2 }} data-text="que assiste os deficientes físicos">
              que assiste os deficientes físicos
            </span>
            <span style={{ "--i": 1 }} data-text="que proporciona auxílio aos deficientes físicos">
              que proporciona auxílio aos deficientes físicos
            </span>
          </h2>
          <p>
            Nossa plataforma é uma solução inclusiva de navegação, projetada especialmente para ajudar cadeirantes a encontrarem rotas acessíveis em suas cidades. Com um sistema de GPS avançado, a plataforma identifica locais adaptados e mostra a rota ideal para chegar a cada destino com segurança e conforto. Além de orientar sobre acessibilidade, a interface é simples e prática, permitindo que os usuários explorem facilmente pontos de interesse inclusivos e planejem seus trajetos com confiança.
          </p>
          <div className="btn-sci">
            <p className="btn">Download</p>
            <div className="sci">
              <a href="https://www.behance.net/mobilidacessiv" target="_blank" rel="noreferrer">
                <i className="bx bxl-behance"></i>
              </a>
              <a href="https://github.com/Mobilidade-Acessivel" target="_blank" rel="noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.instagram.com/mobilidade.acessivel" target="_blank" rel="noreferrer">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="inicio-img">
          <div className="img-box">
            <div className="img-item">
            <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
