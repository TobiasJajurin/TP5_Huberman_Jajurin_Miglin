import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/estadisticas">Estadísticas</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
}

export default Navbar;