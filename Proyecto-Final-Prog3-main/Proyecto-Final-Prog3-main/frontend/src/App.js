import React, { useEffect, useState } from "react";
import JuegoForm from "./components/juego/JuegoForm";
import JuegoLista from "./components/juego/JuegoLista";

const App = () => {
  const [juegos, setJuegos] = useState([]);

  const cargarJuegos = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/juegos?rand=${Math.random()}`, {
        headers: {
          "Cache-Control": "no-cache"
        }
      });
      if (!res.ok) throw new Error("Error al obtener juegos");
      const data = await res.json();
      setJuegos(data);
    } catch (err) {
      console.error("Error al cargar juegos:", err);
      alert("No se pudieron cargar los juegos. Asegurate de que el backend está corriendo.");
    }
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  return (
    <div style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "2rem",
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎮 Catálogo de Videojuegos</h1>
      <JuegoForm onAdd={cargarJuegos} />
      <JuegoLista juegos={juegos} onRefresh={cargarJuegos} />
    </div>
  );
};

export default App;
