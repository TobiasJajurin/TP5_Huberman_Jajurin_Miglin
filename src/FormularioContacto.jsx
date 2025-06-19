import { useState } from 'react';

function FormularioContacto() {
  const [form, setForm] = useState({ nombre: '', apellido: '', email: '', edad: '' });
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const validar = () => {
    const errores = {};
    if (!form.nombre) errores.nombre = "Nombre requerido";
    if (!form.apellido) errores.apellido = "Apellido requerido";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errores.email = "Email inválido";
    if (!form.edad || isNaN(form.edad) || form.edad <= 0) errores.edad = "Edad inválida";
    return errores;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const erroresVal = validar();
    if (Object.keys(erroresVal).length > 0) {
      setErrores(erroresVal);
    } else {
      setErrores({});
      setMensaje("Formulario enviado con éxito 🎉");
      setForm({ nombre: '', apellido: '', email: '', edad: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
      {errores.nombre && <span>{errores.nombre}</span>}

      <input placeholder="Apellido" value={form.apellido} onChange={e => setForm({ ...form, apellido: e.target.value })} />
      {errores.apellido && <span>{errores.apellido}</span>}

      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      {errores.email && <span>{errores.email}</span>}

      <input placeholder="Edad" value={form.edad} onChange={e => setForm({ ...form, edad: e.target.value })} />
      {errores.edad && <span>{errores.edad}</span>}

      <button type="submit">Enviar</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}

export default FormularioContacto;