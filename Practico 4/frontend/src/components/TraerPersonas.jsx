import { useEffect, useState } from 'react';
import ListaTarjetas from './ListaTarjetas';

const TraerPersonas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/personas')
      .then((res) => res.json())
      .then((data) => setPersonas(data))
      .catch((err) => console.error('Error al traer personas:', err));
  }, []);

  return (
    <div>
      <h1>Lista de Personas</h1>
      <ListaTarjetas personas={personas} />
    </div>
  );
};

export default TraerPersonas;
