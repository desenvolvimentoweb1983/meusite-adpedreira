import React, { useState, useEffect } from "react";

// Imagens do Rei Davi criança (salve em /src/assets)
import imgDavi1 from "../assets/davi1.jpg";
import imgDavi2 from "../assets/davi2.jpg";
import imgDavi3 from "../assets/davi3.jpg";
import imgDavi4 from "../assets/davi4.jpg"; // História Bíblica
import imgDavi5 from "../assets/davi5.jpg"; // Louvores Infantis
import imgDavi6 from "../assets/davi6.jpg"; // Desenhos Bíblicos

export default function Pequeninos() {
  const imagens = [imgDavi1, imgDavi2, imgDavi3];
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container pequeninos-container">
      <h1>Bem-vindo(a) ao Espaço Pequeninos!</h1>
      <p className="intro-text">
        Aqui, as crianças aprendem sobre o amor de Deus através de histórias,
        louvores e atividades educativas. Tudo com diversão, segurança e
        criatividade!
      </p>

      {/* ===================== Slideshow ===================== */}
      <div className="slideshow-container">
        {imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Imagem Davi ${i + 1}`}
            className={`imagem-slide ${i === indice ? "active" : ""}`}
            aria-hidden={i !== indice}
          />
        ))}
      </div>

      {/* ===================== Histórias Bíblicas ===================== */}
      <section className="section historias-biblicas">
        <h2>📖 História Bíblica: Davi</h2>
        <img src={imgDavi4} alt="História Bíblica de Davi" className="section-img" />
        <p>
          Conheça a história de Davi e aprenda sobre coragem, fé e amizade.
        </p>
        <a
          href="https://www.youtube.com/watch?v=hF4yIfc1_bc"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-interativo"
        >
          Recomendação de vídeo 
        </a>
      </section>

      {/* ===================== Louvores Infantis ===================== */}
      <section className="section louvores-infantis">
        <h2>🎵 Louvores Infantis</h2>
        <img src={imgDavi5} alt="Louvores com Davi" className="section-img" />
        <p>
          Vamos cantar e adorar a Deus com músicas divertidas para os pequeninos!
        </p>
        <a
          href="https://www.youtube.com/watch?v=P6fXi1RXUFU"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-interativo"
        >
          Recomendação de louvor
        </a>
      </section>

      {/* ===================== Desenhos Bíblicos ===================== */}
      <section className="section desenhos-biblicos">
        <h2>✏️ Desenhos Bíblicos</h2>
        <img src={imgDavi6} alt="Desenhos Bíblicos de Davi" className="section-img" />
        <p>
          Atividades de desenho com o tema do Rei Davi, incentivando a
          criatividade e aprendizado da Bíblia.
        </p>
        <a
          href="https://www.youtube.com/watch?v=Dcw_NT4Y_2k"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-interativo"
        >
          Recomendação de atividade
        </a>
      </section>
    </div>
  );
}