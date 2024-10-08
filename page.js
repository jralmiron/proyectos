'use client'; // Para habilitar la funcionalidad de cliente

import { useState } from 'react';
import LoginPanel from '../app/login/loginPanel';
import Dashboard from '../app/dashboard/dashboard';

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para saber si el usuario está logueado

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Cambiar a true si el login es exitoso
  };

  // Mostrar el componente de Login si no está autenticado, o el Dashboard si lo está
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLoggedIn ? <Dashboard /> : <LoginPanel onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default Page;
