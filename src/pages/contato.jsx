import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import devWebLuis from "../assets/devWebLuis.png";
import contatoJoao from "../assets/contatoJoao.jpg";

export default function Contato() {
  return (
    <div className="container contato-container">
      {/* ===================== Contato Pastor ===================== */}
      <div className="contato-card">
        <h2>Pastor Paulo Rosa</h2>
        <p>+55 (19) 99823 7694</p>
        <a
          href="https://wa.me/5519998237694"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Enviar mensagem
        </a>
      </div>

      {/* ===================== Contato Pastor ===================== */}
      <div className="contato-card">
        <h2>Pastor João Batista</h2>
        <p>+55 (19) 99602 1411</p>
        <img src={contatoJoao} alt="Pastor João Batista" className="contato-img" />
        <a
          href="https://wa.me/5519996021411"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Enviar mensagem
        </a>
      </div>

      {/* ===================== Contato Desenvolvedor ===================== */}
      <div className="contato-card">
        <h2>Desenvolvedor Web</h2>
        <p>+55 (19) 97408 2724</p>
        <img src={devWebLuis} alt="Desenvolvedor Web Luís" className="contato-img" />
        <a
          href="https://wa.me/5519974082724"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Enviar mensagem
        </a>
      </div>
    </div>
  );
}