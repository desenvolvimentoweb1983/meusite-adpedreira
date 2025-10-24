import React from "react";
import oracaoImg from "../assets/oracao.jpg";

export default function Oremos() {
  return (
    <div className="oremos-container">
      <img src={oracaoImg} alt="Momento de oração" className="imagem-oremos" />
    </div>
  );
}