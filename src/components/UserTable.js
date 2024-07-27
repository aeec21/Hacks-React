import React from 'react';

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <table style={{ margin: '0 auto', marginTop: '20px', borderCollapse: 'collapse', width: '80%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Correo</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Nombre</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Edad</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Acción</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{user.correo}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{user.nombre}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{user.edad}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <button onClick={() => onEdit(user)} style={{ backgroundColor: '#000066', color: 'white' }}>Editar</button>
              <button onClick={() => onDelete(user.id)} style={{ backgroundColor: '#000066', color: 'white' }}>Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
