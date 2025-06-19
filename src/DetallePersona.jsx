import { useParams } from 'react-router-dom';
import personas from './personas.json';

function DetallePersona() {
  const { id } = useParams();
  const persona = personas.find(p => p.id === parseInt(id));

  if (!persona) return <p>No existe la persona con ID {id}</p>;

  return (
    <div>
      <h2>{persona.nombre}</h2>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
      <p>{persona.edad >= 18 ? "Mayor de edad" : "Menor de edad"}</p>
    </div>
  );
}

export default DetallePersona;