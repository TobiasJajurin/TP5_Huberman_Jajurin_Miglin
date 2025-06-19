import personas from './personas.json';
import PersonaCard from './PersonaCard';

function Home() {
  return (
    <div>
      <h2>Lista de Personas</h2>
      {personas.map(p => (
        <PersonaCard key={p.id} persona={p} />
      ))}
    </div>
  );
}

export default Home;