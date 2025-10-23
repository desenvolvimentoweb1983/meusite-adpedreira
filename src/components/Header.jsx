import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo / Nome da igreja */}
      <div className="nomeDaIgreja">Congregação: JD Triunfo, Pedreira, SP</div>

      {/* Menu de navegação */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
        <Link to="/palavra" onClick={() => setMenuOpen(false)}>Palavra</Link>
        <Link to="/louvor" onClick={() => setMenuOpen(false)}>Louvor</Link>
        <Link to="/jovens" onClick={() => setMenuOpen(false)}>Jovens</Link>
        <Link to="/pequeninos" onClick={() => setMenuOpen(false)}>Pequeninos</Link>
        <Link to="/oremos" onClick={() => setMenuOpen(false)}>Oremos</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
      </nav>

      {/* Botão para abrir/fechar menu mobile */}
      <button
        className="menu-toggle"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
}