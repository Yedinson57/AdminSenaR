import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user_session')) {
      alert('Acceso denegado: Debes iniciar sesión para acceder al panel de administración.');
      navigate('/auth/login');
    }
  }, [navigate]);

  if (!localStorage.getItem('user_session')) {
    return null;
  }

  return children;
}
