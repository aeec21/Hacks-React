import React, { useState, useEffect, useCallback } from 'react';

const UserForm = ({ user, onSave, onSearch, onClear }) => {
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [buscarId, setBuscarId] = useState('');

  const limpiarForm = useCallback(() => {
    setCorreo('');
    setNombre('');
    setEdad('');
    setBuscarId('');
    onClear();
  }, [onClear]);

  useEffect(() => {
    if (user) {
      setCorreo(user.correo);
      setNombre(user.nombre);
      setEdad(user.edad);
    } else {
      limpiarForm();
    }
  }, [user, limpiarForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: user?.id, correo, nombre, edad };
    onSave(newUser);
    limpiarForm();
  };

  const handleNombreChange = (e) => {
    const value = e.target.value;
    if (value === '' || isAlphabetic(value)) {
      setNombre(truncateNombre(value));
    }
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    onSearch(parseInt(buscarId, 10));
  };

  const isAlphabetic = (str) => /^[A-Za-z ]+$/.test(str);

  const truncateNombre = (str) => {
    return str.length > 10 ? str.substring(0, 10) + '...' : str;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <table style={{ margin: '0 auto' }}>
          <tbody>
            <tr>
              <td><label>Correo:</label></td>
              <td><input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              /></td>
            </tr>
            <tr>
              <td><label>Nombre:</label></td>
              <td><input
                type="text"
                value={nombre}
                onChange={handleNombreChange}
                required
              /></td>
            </tr>
            <tr>
              <td><label>Edad:</label></td>
              <td><input
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                required
              /></td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit" style={{ backgroundColor: '#000066', color: 'white' }}>Guardar</button>
                <button type="button" onClick={limpiarForm} style={{ backgroundColor: '#000066', color: 'white', marginLeft: '10px' }}>Limpiar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <form onSubmit={handleBuscar} style={{ marginTop: '20px' }}>
        <table style={{ margin: '0 auto' }}>
          <tbody>
            <tr>
              <td><label>Buscar Usuario (ID):</label></td>
              <td><input
                type="number"
                value={buscarId}
                onChange={(e) => setBuscarId(e.target.value)}
                required
              /></td>
              <td>
                <button type="submit" style={{ backgroundColor: '#000066', color: 'white' }}>Buscar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default UserForm;
