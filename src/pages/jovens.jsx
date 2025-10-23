import React, { useState, useEffect } from "react";

// Importe suas imagens
import img0 from "../assets/jovens.jpg";
import img1 from "../assets/jovens1.jpg";
import img2 from "../assets/jovens2.jpg";
import img3 from "../assets/jovens3.jpg";

export default function Jovens() {
  const imagens = [img0, img1, img2, img3];
  const [indice, setIndice] = useState(0);

  // Troca automática a cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [imagens.length]);

  return (
    <div className="container jovens-container">
      {/* ===================== Slideshow ===================== */}
      <div className="slideshow-container">
        {imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Imagem ${i + 1}`}
            className="imagem-slide"
            style={{ opacity: i === indice ? 1 : 0 }}
          />
        ))}
      </div>

      {/* ===================== Texto de Boas-Vindas ===================== */}
      <div className="texto-jovens">
        <h2>Bem-vindo(a) ao Grupo de Jovens – JD Triunfo!</h2>
        <p>
          Nosso espaço é dedicado à <strong>comunhão, aprendizado e desenvolvimento espiritual</strong>. Durante nossos encontros, realizamos diversas atividades que fortalecem os laços comunitários e promovem o crescimento pessoal e espiritual:
        </p>
        <ul>
          <li>
            <strong>Estudos Bíblicos:</strong> momentos de reflexão e aprendizado da Palavra de Deus, aplicando os ensinamentos à vida cotidiana.
          </li>
          <li>
            <strong>Louvor e Adoração:</strong> participação em cânticos e práticas musicais, incluindo aulas gratuitas de violão, canto e expressão artística.
          </li>
          <li>
            <strong>Atividades Sociais:</strong> ações de voluntariado, arrecadação de alimentos, roupas e apoio a pessoas em situação de vulnerabilidade.
          </li>
          <li>
            <strong>Dinâmicas e Integração:</strong> Atividades, palestras e rodas de conversa que incentivam o trabalho em equipe e o fortalecimento das amizades.
          </li>
          <li>
            <strong>Eventos Comunitários:</strong> encontros especiais, retiros espirituais e eventos de confraternização que promovem a interação saudável e divertida entre os jovens.
          </li>
        </ul>
        <p>
          <strong>Venha participar conosco em nossos encontros, momentos de comunhão e aprendizado da Palavra de Deus!</strong>
        </p>
        <p className="info-violao">
          🎸 Aulas de violão todos os sábados às <strong>14:00 horas</strong>.
        </p>
      </div>
    </div>
  );
}