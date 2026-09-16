import { Link } from 'react-router-dom';

export default function ActionButtons({ showTo, editTo, onDelete }) {
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
