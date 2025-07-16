import React, { useState } from "react";

const JuegoLista = ({ juegos, onRefresh }) => {
  const [editandoEstadoId, setEditandoEstadoId] = useState(null);

  const actualizarHoras = async (id, horas) => {
    await fetch(`http://localhost:3001/api/juegos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ horas_jugadas: horas })
    });
    onRefresh();
  };

  const cambiarEstado = async (id, nuevoEstado) => {
    try {
      const res = await fetch(`http://localhost:3001/api/juegos/${id}/estado`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ estado: nuevoEstado })
      });

      const data = await res.json();
      console.log("✅ Estado actualizado:", data);

      setTimeout(() => {
        setEditandoEstadoId(null);
        onRefresh();
      }, 100);
    } catch (err) {
      console.error("❌ Error al cambiar estado:", err);
    }
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{ backgroundColor: "#ddd" }}>
        <tr>
          <th>Título</th>
          <th>Plataforma</th>
          <th>Género</th>
          <th>Estado</th>
          <th>⏱ Horas</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {juegos.map((j) => (
          <tr key={j.id} style={{ borderBottom: "1px solid #ccc" }}>
            <td>{j.titulo}</td>
            <td>{j.plataforma}</td>
            <td>{j.genero}</td>
            <td style={{
              fontWeight: "bold",
              color: j.estado === "Completado" ? "green" : j.estado === "Jugando" ? "orange" : "gray"
            }}>
              {editandoEstadoId === j.id ? (
                <select
                  autoFocus
                  value={j.estado || "Pendiente"}
                  onChange={(e) => cambiarEstado(j.id, e.target.value)}
                  onBlur={() => setEditandoEstadoId(null)}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="Jugando">Jugando</option>
                  <option value="Completado">Completado</option>
                </select>
              ) : (
                j.estado || "Pendiente"
              )}
            </td>
            <td>{j.horas_jugadas}</td>
            <td>
              <button onClick={() => {
                const nuevaHoras = prompt("Horas jugadas:");
                if (nuevaHoras) actualizarHoras(j.id, parseInt(nuevaHoras));
              }}>📝 Horas</button>
              <button onClick={() => setEditandoEstadoId(j.id)}>🔁 Estado</button>
              <button onClick={async () => {
                await fetch(`http://localhost:3001/api/juegos/${j.id}`, { method: "DELETE" });
                onRefresh();
              }}>🗑️ Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JuegoLista;
