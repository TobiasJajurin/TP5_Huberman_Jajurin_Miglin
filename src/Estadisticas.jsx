import personas from './personas.json';

function Estadisticas() {
  const total = personas.length;
  const mayores35 = personas.filter(p => p.edad > 35).length;
  const maxEdad = Math.max(...personas.map(p => p.edad));
  const minEdad = Math.min(...personas.map(p => p.edad));
  const mayores = personas.filter(p => p.edad === maxEdad);
  const menores = personas.filter(p => p.edad === minEdad);
  const promedio = (personas.reduce((acc, p) => acc + p.edad, 0) / total).toFixed(1);

  return (
    <div>
      <h2>Estadísticas</h2>
      <ul>
        <li>Total: {total}</li>
        <li>Mayores de 35: {mayores35}</li>
        <li>Mayor edad: {maxEdad} ({mayores.map(p => p.nombre).join(', ')})</li>
        <li>Menor edad: {minEdad} ({menores.map(p => p.nombre).join(', ')})</li>
        <li>Promedio de edad: {promedio}</li>
      </ul>
    </div>
  );
}

export default Estadisticas;