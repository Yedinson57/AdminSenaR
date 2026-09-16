import React from 'react';
import { Link } from 'react-router-dom';
import { eventos } from '../../data/publicContent';

export default function EventosIndex() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold" style={{ color: '#00324D' }}>Próximos Eventos</h2>
          <p className="text-muted mb-0">Agenda Institucional y Actividades Académicas</p>
        </div>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
        </Link>
      </div>
      <div className="row g-4">
        {eventos.map((evento) => (
          <div className="col-md-6" key={evento.id}>
            <div className="card border-2 shadow-sm rounded-4 overflow-hidden">
              <div className="row g-0">
                <div className="col-sm-5">
                  <img src={evento.imagen} className="w-100 h-100" style={{ objectFit: 'cover', minHeight: '200px' }} alt={evento.titulo} />
                </div>
                <div className="col-sm-7">
                  <div className="card-body p-4">
                    <span className="badge bg-warning text-dark fw-bold mb-2"><i className="bi bi-calendar3 me-1"></i> {evento.fecha}</span>
                    <h5 className="fw-bold text-dark">{evento.titulo}</h5>
                    <p className="text-muted small mb-2"><i className="bi bi-geo-alt-fill text-danger me-1"></i>{evento.lugar}</p>
                    <p className="text-muted small mb-3"><i className="bi bi-clock-fill me-1"></i>{evento.hora}</p>
                    <Link to={`/eventos/${evento.id}`} className="btn btn-sm text-white fw-bold px-3 py-2 rounded-3" style={{ backgroundColor: '#00324D' }}>
                      Más Información
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
