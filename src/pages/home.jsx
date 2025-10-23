import React, { useState, useEffect, useRef } from "react";
import musica from "../assets/Alvo Mais Que a Neve.mp3";

// Imagens do slideshow do Hero
import img1 from "../assets/assembleiaDeDeusIpiranga.jpg";
import img2 from "../assets/irmasPedreira1.jpg";
import img3 from "../assets/jovens2.jpg";
import img4 from "../assets/irmasPedreira2.jpg";

export default function Home() {
  const cards = [
    { title: "Culto", text: "Todos os domingos às 19:00 horas" },
    { title: "Culto de Libertação", text: "Todas as sextas-feiras às 19:30 horas" },
    { title: "Estudo Bíblico", text: "Todas as quartas-feiras às 19:30 horas" },
    { title: "Santa Ceia", text: "Terceiro sábado do mês às 19:00 horas" },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const audioRef = useRef(null);

  const slides = [img1, img2, img3, img4]; // Atualizado com novas imagens

  // Autoplay dos cards
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCardIndex(prev => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(cardInterval);
  }, [cards.length]);

  // Autoplay do slideshow do Hero
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Toca a música ao carregar
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("A reprodução automática foi bloqueada pelo navegador.");
      });
    }
  }, []);

  const prevCard = () => {
    setCurrentCardIndex(prev => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentCardIndex(prev => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-container">

      {/* ===================== Hero Slideshow ===================== */}
      <section className="hero">
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={index === currentSlideIndex ? "active" : ""}
            />
          ))}
          <button className="slideshow-btn prev" onClick={prevSlide}>◀</button>
          <button className="slideshow-btn next" onClick={nextSlide}>▶</button>
        </div>
        <h1 className="hero-title">
          Bem-vindo(a) à Igreja Assembleia de Deus Ipiranga – Setor Morungaba, SP – Congregação: JD Triunfo, Pedreira, SP
        </h1>
      </section>

      {/* ===================== Horários Slider ===================== */}
      <section className="section-horarios">
        <h2>Nossos Horários</h2>
        <div className="slider-container">
          <button onClick={prevCard} className="slider-btn">◀</button>
          <div className="card card-azul">
            <h3>{cards[currentCardIndex].title}</h3>
            <p>{cards[currentCardIndex].text}</p>
          </div>
          <button onClick={nextCard} className="slider-btn">▶</button>
        </div>
      </section>

      {/* ===================== Endereço ===================== */}
      <section className="section-endereco">
        <h2>Nosso Endereço</h2>
        <p>Rua João Batista, 190 - Pedreira, SP</p>
        <p>CEP: 13920-000</p>
        <a
          href="https://www.google.com/maps/place/Rua+João+Batista,+190,+Pedreira,+SP,+13920-000"
          target="_blank"
          rel="noopener noreferrer"
          className="como-chegar"
        >
          Como chegar
        </a>
      </section>

      {/* ===================== Áudio ===================== */}
      <audio ref={audioRef} src={musica} controls loop />
    </div>
  );
}