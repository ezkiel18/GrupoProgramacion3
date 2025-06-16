import TarjetaPersona from './TarjetaPersona';

const ListaTarjetas = ({ personas }) => {
  return (
    <div>
      {personas.map((persona) => (
        <TarjetaPersona key={persona.id} persona={persona} />
      ))}
    </div>
  );
};

export default ListaTarjetas;
