import React, { useRef, useEffect } from "react";
import musica from "../assets/Alvo Mais Que a Neve.mp3"; // importa o MP3

export default function Louvor() {
  const audioRef = useRef(null);

  useEffect(() => {
    // tenta iniciar a música automaticamente
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("A reprodução automática foi bloqueada pelo navegador.");
      });
    }
  }, []);

  return (
    <div className="container louvor-container">
      <h1>Louvemos ao nosso Senhor Jesus</h1>

      {/* ===================== Título do Hino ===================== */}
      <h2>🎵 Alvo Mais Que a Neve</h2>

      {/* ===================== Letra ===================== */}
      <div className="letra-louvor">
        <p>
          Bendito seja o Cordeiro<br />
          Que na cruz por nós padeceu<br />
          Bendito seja o Seu sangue<br />
          Que por nós ali Ele verteu<br />
          Eis nesse sangue, lavados<br />
          Com roupas que tão alvas são<br />
          Os pecadores remidos<br />
          Que perante seu Deus já estão
        </p>

        <p>
          <strong>Alvo mais que a neve<br />
          Alvo mais que a neve<br />
          Sim, neste sangue lavado<br />
          Mais alvo que a neve serei</strong>
        </p>

        <p>
          Quão espinhosa a coroa<br />
          Que Jesus por nós suportou<br />
          Ó, quão profundas as chagas<br />
          Que nos provam o quanto Ele amou<br />
          Eis, nessas chagas, pureza<br />
          Para o maior pecador<br />
          Pois que mais alvo que a neve<br />
          O Teu sangue nos torna, Senhor
        </p>

        <p>
          <strong>Alvo mais que a neve<br />
          Alvo mais que a neve<br />
          Sim, neste sangue lavado<br />
          Mais alvo que a neve serei</strong>
        </p>

        <p>
          Se nós a Ti confessarmos<br />
          E seguirmos na Tua luz<br />
          Tu não somente perdoas<br />
          Purificas também, ó Jesus<br />
          Sim, e de todo pecado<br />
          Que maravilha de amor<br />
          Pois, que mais alvo que a neve<br />
          O Teu sangue nos torna, Senhor
        </p>

        <p>
          <strong>Alvo mais que a neve<br />
          Alvo mais que a neve<br />
          Sim, neste sangue lavado<br />
          Mais alvo que a neve serei</strong>
        </p>

        <p><strong>Sim, neste sangue lavado<br />Mais alvo que a neve serei</strong></p>
      </div>

      {/* ===================== Player de Áudio ===================== */}
      <audio ref={audioRef} src={musica} controls loop className="audio-player" />
    </div>
  );
}