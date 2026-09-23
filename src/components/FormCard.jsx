// creo un componente para las cartas de formulario
// importo Link para navegabilidad
import { Link } from 'react-router-dom';

// creo la funcion y la exporto para las cartas de formulario
// uso los diferentes parametros para pasar elementos de forma dinamica
export default function FormCard({ title, subtitle, indexTo, children }) {
  // retorno lo que va a mirar el usuario en el formulario
  return (  
    <div className="py-5 rounded-4" style={{ backgroundColor: '#f4f6f9' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div
                className="card-header text-white text-center py-4"
                style={{ backgroundColor: '#39A900', borderBottom: 'none' }}
              >
                <h4 className="mb-0 fw-bold">{title}</h4>
                {subtitle && <p className="mb-0 mt-1 small opacity-75">{subtitle}</p>}
              </div>
              <div className="card-body p-4 p-md-5 bg-white">{children}</div>
              {indexTo && (
                <div className="p-3 bg-light text-center border-top">
                  <Link
                    to={indexTo}
                    className="btn text-white fw-bold px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
                    style={{ backgroundColor: '#39A900' }}
                  >
                    Revisar Registros
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
