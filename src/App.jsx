import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleGuardar = (user) => {
    if (user.id) {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
    } else {
      user.id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
      setUsers([...users, user]);
    }
    setCurrentUser(null);
  };

  const handleEditar = (user) => {
    setCurrentUser(user);
  };

  const handleBorrar = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const handleBuscar = (id) => {
    const user = users.find(u => u.id === id);
    if (user) {
      alert(`User found:\nID: ${user.id}\nEmail: ${user.correo}\nName: ${user.nombre}\nAge: ${user.edad}`);
    } else {
      alert('User not found');
    }
  };

  const handleLimpiar = () => {
    setCurrentUser(null);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <UserForm user={currentUser} onSave={handleGuardar} onSearch={handleBuscar} onClear={handleLimpiar} />
      <UserTable users={users} onEdit={handleEditar} onDelete={handleBorrar} />
    </div>
  );
};

export default App;
