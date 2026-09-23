// importamos Link desde react-router-dom
import { Link } from 'react-router-dom';

// creamos la funcion para los botones de accion con sus parametros y la exportamos
export default function ActionButtons({ showTo, editTo, onDelete }) {
  // retornamos lo que va a mirar el usuario
  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <Link
        to={showTo}
        className="btn btn-sm btn-light border fw-medium d-inline-flex justify-content-center align-items-center"
        style={{ width: '80px', height: '32px' }}
      >
        Ver
      </Link>
      <Link
        to={editTo}
        className="btn btn-sm btn-outline-dark fw-medium d-inline-flex justify-content-center align-items-center"
        style={{ width: '80px', height: '32px' }}
      >
        Editar
      </Link>
      <button
        type="button"
        onClick={onDelete}
        className="btn btn-sm btn-danger fw-medium d-inline-flex justify-content-center align-items-center"
        style={{ width: '80px', height: '32px' }}
      >
        Eliminar
      </button>
    </div>
  );
}
