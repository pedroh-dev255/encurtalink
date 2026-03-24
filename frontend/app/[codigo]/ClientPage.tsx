"use client";

import { useEffect, useState } from "react";

export default function ClientPage({ codigo }: { codigo: string }) {
  const [tempo, setTempo] = useState(5);
  const [liberado, setLiberado] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // ⏳ TIMER (independente)
  useEffect(() => {
    if (tempo <= 0) {
      setLiberado(true);
      return;
    }

    const timer = setTimeout(() => {
      setTempo((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [tempo]);

  // 🚀 FETCH (em paralelo, sem bloquear nada)
  useEffect(() => {
    const fetchLink = async () => {
      try {
        const res = await fetch(`/api/link/${codigo}`);
        const data = await res.json();
        setUrl(data.url);
      } catch (err) {
        console.error("Erro ao buscar link");
      } finally {
        setLoading(false);
      }
    };

    fetchLink();
  }, [codigo]);

  const handleClick = () => {
    if (!url) {
      alert("Erro ao obter o link. Tente novamente mais tarde.");
      return;
    }

    window.location.href = url;
  };

  return (
    <div className="flex flex-col min-h-screen py-2 bg-gray-100">
      <nav className="flex flex-row justify-between bg-white shadow-md p-4">
        <h1 className="text-2xl text-gray-800 font-bold">EncurtaLink</h1>

        <button
          onClick={handleClick}
          disabled={!liberado}
          className={`font-bold py-2 px-4 rounded ${
            liberado
              ? "text-black bg-yellow-500 hover:bg-yellow-700"
              : "text-white bg-gray-400 cursor-not-allowed"
          }`}
        >
          {liberado
            ? loading
              ? "Preparando link..."
              : "Click Aqui!"
            : `Aguarde ${tempo}s`}
        </button>
      </nav>

      <main className="flex flex-col items-center justify-center flex-1">
        <div className="mt-10 w-full max-w-xl h-40 bg-gray-300 flex items-center justify-center">
          Espaço para Ads
        </div>
      </main>
    </div>
  );
}
