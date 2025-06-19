import { useNavigate } from 'react-router-dom';

function PersonaCard({ persona }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{persona.nombre}</h3>
      <p>Edad: {persona.edad}</p>
      <button onClick={() => navigate(`/persona/${persona.id}`)}>Ver más</button>
    </div>
  );
}

export default PersonaCard;