// Realizo un componente para el requerimento de la autenticación
/* importo los hooks useEffect y useNavigate, el primero para verificar si el usuario ya ha iniciado sesion o el componente
se carga por primera vez y el segundo para navegar sin recargar toda la pagina
*/ 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Creamos la función para autenticacion y hacemos uso de children para pasar elementos de forma dinamica
export default function RequireAuth({ children }) {
  // creamos la función para useNavigate
  const navigate = useNavigate();

  // hacemos uso de useEffext
  useEffect(() => {
    // mediante el uso de local storage y un condicional determinamos si el usuario no ha iniciado sesión
    if (!localStorage.getItem('user_session')) {
      // en caso de no hacerlo e intentar entrar a cosas del rol admin se muestra un alaerta indicando la negacion del acceso
      alert('Acceso denegado: Debes iniciar sesión para acceder al panel de administración.');
      // se devuelve a login
      navigate('/auth/login');
    }
  }, [navigate]);

  // como no ha iniciado sesion no retorna nada
  if (!localStorage.getItem('user_session')) {
    return null;
  }

  // retorna el children
  return children;
}
