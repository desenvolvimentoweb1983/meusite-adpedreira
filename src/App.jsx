import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes globais
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas (todos em minúsculas)
import Home from "./pages/home.jsx";
import Sobre from "./pages/sobre.jsx";
import Palavra from "./pages/palavra.jsx";
import Louvor from "./pages/louvor.jsx";
import Jovens from "./pages/jovens.jsx";
import Oremos from "./pages/oremos.jsx";
import Contato from "./pages/contato.jsx";
import Pequeninos from "./pages/pequeninos.jsx";

// CSS global
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/palavra" element={<Palavra />} />
          <Route path="/louvor" element={<Louvor />} />
          <Route path="/jovens" element={<Jovens />} />
          <Route path="/pequeninos" element={<Pequeninos />} />
          <Route path="/oremos" element={<Oremos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;