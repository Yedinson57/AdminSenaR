// el Header que se muestra en el index de los componentes de ejemplo
// importo link para la navegabilidad
import { Link } from 'react-router-dom';

// creamos la funcion y exportamos para la cabecera del index
export default function IndexHeader({ title, description, createTo, createLabel }) {
  // retorno lo que va a mirar el usuario 
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
      <div>
        <h2 className="fw-bold text-dark mb-1">{title}</h2>
        <p className="text-muted small mb-0">{description}</p>
      </div>
      <Link
        to={createTo}
        className="btn text-white fw-bold px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
        style={{ backgroundColor: '#39A900' }}
      >
        {createLabel}
      </Link>
    </div>
  );
}
