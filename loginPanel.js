// src/app/login/page.js

import { useState } from 'react';
import Dashboard from '../dashboard/dashboard';

const LoginPanel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validar email y contraseña
    if (!email) {
      setError('Por favor ingresa tu email.');
      return;
    }
    if (!password) {
      setError('Por favor ingresa tu contraseña.');
      return;
    }

    // Si todo es válido, cambiar el estado de login
    setError(''); // Limpiar errores
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <Dashboard></Dashboard>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="p-6 shadow-md rounded-3xl bg-slate-400 w-80">
        <h2 className="mb-4 text-xl font-bold text-center">Inicia Sesión</h2>
        {error && <p className="mb-4 text-center text-red-600">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 text-center border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 text-center border rounded-lg"
          required
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 shadow-red-500 rounded-2xl">
          Iniciar
        </button>
      </form>
    </div>
  );
};

export default LoginPanel;
