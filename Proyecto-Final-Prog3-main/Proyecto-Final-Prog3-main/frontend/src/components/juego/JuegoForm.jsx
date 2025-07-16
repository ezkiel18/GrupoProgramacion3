import React, { useState } from "react";

const JuegoForm = ({ onAdd }) => {
  const [titulo, setTitulo] = useState("");
  const [estado, setEstado] = useState("Pendiente");
  const [plataforma, setPlataforma] = useState("");
  const [genero, setGenero] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [horas, setHoras] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/api/juegos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo,
        estado,
        plataforma,
        genero,
        calificacion: parseInt(calificacion),
        horas_jugadas: parseInt(horas)
      })
    });
    setTitulo("");
    setEstado("Pendiente");
    setPlataforma("");
    setGenero("");
    setCalificacion("");
    setHoras("");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
      marginBottom: "2rem"
    }}>
      <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
  <option value="Completado">Completado</option>
  <option value="Jugando">Jugando</option>
  <option value="Pendiente">Pendiente</option>
</select>
      <input placeholder="Plataforma" value={plataforma} onChange={(e) => setPlataforma(e.target.value)} />
      <input placeholder="Género" value={genero} onChange={(e) => setGenero(e.target.value)} />
      <input type="number" placeholder="Calificación (1-5)" min="1" max="5" value={calificacion} onChange={(e) => setCalificacion(e.target.value)} />
      <input type="number" placeholder="Horas jugadas" min="0" value={horas} onChange={(e) => setHoras(e.target.value)} />
      <div style={{ gridColumn: "1 / -1", textAlign: "right" }}>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default JuegoForm;
