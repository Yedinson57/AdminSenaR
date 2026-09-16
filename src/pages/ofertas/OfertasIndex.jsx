import React from 'react';
import { Link } from 'react-router-dom';
import { ofertas } from '../../data/publicContent';

export default function OfertasIndex() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold" style={{ color: '#00324D' }}>Oferta Educativa SENA</h2>
          <p className="text-muted mb-0">Programas de formación disponibles para inscripción</p>
        </div>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
        </Link>
      </div>
      <div className="row g-4">
        {ofertas.map((oferta) => (
          <div className="col-md-6 col-lg-4" key={oferta.id}>
            <div className="card h-100 border-2 shadow-sm rounded-4 overflow-hidden">
              <img src={oferta.imagen} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} alt={oferta.titulo} />
              <div className="card-body p-4 d-flex flex-column">
                <span className="badge text-uppercase fw-bold px-3 py-2 rounded-pill mb-2 w-auto me-auto" style={{ backgroundColor: '#00324D', color: 'white' }}>
                  {oferta.modalidad}
                </span>
                <h5 className="fw-bold text-dark mt-2 mb-2">{oferta.titulo}</h5>
                <p className="text-muted small flex-grow-1">{oferta.descripcion}</p>
                <ul className="list-unstyled small text-secondary my-3 border-top pt-2">
                  <li><i className="bi bi-clock me-2 text-success"></i><strong>Duración:</strong> {oferta.duracion}</li>
                  <li><i className="bi bi-people me-2 text-success"></i><strong>Cupos:</strong> {oferta.cupos} disponibles</li>
                </ul>
                <Link to={`/ofertas/${oferta.id}`} className="btn text-white fw-bold w-100 rounded-3" style={{ backgroundColor: '#39A900' }}>
                  Ver Detalles e Inscribirme
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
