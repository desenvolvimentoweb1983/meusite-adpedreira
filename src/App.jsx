import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes globais
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas (todos arquivos em minúsculo)
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
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/sobre", element: <Sobre /> },
    { path: "/palavra", element: <Palavra /> },
    { path: "/louvor", element: <Louvor /> },
    { path: "/jovens", element: <Jovens /> },
    { path: "/pequeninos", element: <Pequeninos /> },
    { path: "/oremos", element: <Oremos /> },
    { path: "/contato", element: <Contato /> },
  ];

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;