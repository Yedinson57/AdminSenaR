import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { eventos } from '../../data/publicContent';

export default function EventosShow() {
  const { id } = useParams();
  const evento = eventos.find((item) => String(item.id) === String(id));

  if (!evento) {
    return (
      <div className="container py-5 text-center">
        <h4>Evento no encontrado</h4>
        <Link to="/eventos" className="btn btn-dark mt-3">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/eventos" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold px-3">
          <i className="bi bi-arrow-left me-1"></i> Volver a Eventos
        </Link>
        <span className="text-muted small"><i className="bi bi-calendar-event me-1"></i> Evento #{evento.id}</span>
      </div>
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <img src={evento.imagen} className="img-fluid w-100 object-fit-cover" alt={evento.titulo} style={{ maxHeight: '350px' }} />
        <div className="card-body p-4 p-md-5">
          <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-2 rounded-pill fw-bold mb-3">{evento.organizador}</span>
          <h2 className="fw-bold text-dark mb-3">{evento.titulo}</h2>
          <p className="text-secondary">{evento.descripcion}</p>
          <div className="row g-3">
            <div className="col-md-3"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Fecha</small><span className="fw-bold">{evento.fecha}</span></div></div>
            <div className="col-md-3"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Hora</small><span className="fw-bold">{evento.hora}</span></div></div>
            <div className="col-md-3"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Lugar</small><span className="fw-bold">{evento.lugar}</span></div></div>
            <div className="col-md-3"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Organizador</small><span className="fw-bold">{evento.organizador}</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
