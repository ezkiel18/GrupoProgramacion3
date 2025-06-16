const TarjetaPersona = ({ persona }) => {
  return (
    <div style={styles.card}>
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  }
};

export default TarjetaPersona;
