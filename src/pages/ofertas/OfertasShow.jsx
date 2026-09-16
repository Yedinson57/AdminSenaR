import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ofertas } from '../../data/publicContent';

export default function OfertasShow() {
  const { id } = useParams();
  const oferta = ofertas.find((item) => String(item.id) === String(id));

  if (!oferta) {
    return (
      <div className="container py-5 text-center">
        <h4>Oferta no encontrada</h4>
        <Link to="/ofertas" className="btn btn-dark mt-3">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/ofertas" className="btn btn-outline-secondary btn-sm rounded-pill fw-bold px-3">
          <i className="bi bi-arrow-left me-1"></i> Volver a Ofertas
        </Link>
        <span className="text-muted small"><i className="bi bi-journal-plus me-1"></i> Oferta #{oferta.id}</span>
      </div>
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="w-100 bg-dark text-center overflow-hidden" style={{ maxHeight: '350px' }}>
          <img src={oferta.imagen} className="img-fluid w-100 object-fit-cover" alt={oferta.titulo} style={{ maxHeight: '350px' }} />
        </div>
        <div className="card-body p-4 p-md-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge bg-success-subtle text-success border border-success px-3 py-2 rounded-pill fw-bold">{oferta.modalidad}</span>
            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">{oferta.cupos} Cupos disponibles</span>
          </div>
          <h2 className="fw-bold text-dark mb-3">{oferta.titulo}</h2>
          <p className="text-secondary">{oferta.descripcion}</p>
          <div className="mb-4 p-3 bg-light rounded-3 border-start border-4 border-success">
            <h6 className="fw-bold text-dark mb-1">Requisitos de Ingreso</h6>
            <p className="mb-0 text-muted small">{oferta.requisitos}</p>
          </div>
          <div className="row g-3">
            <div className="col-md-4"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Duración</small><span className="fw-bold">{oferta.duracion}</span></div></div>
            <div className="col-md-4"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Modalidad</small><span className="fw-bold">{oferta.modalidad}</span></div></div>
            <div className="col-md-4"><div className="p-3 bg-light rounded-3 h-100"><small className="text-muted d-block">Centro</small><span className="fw-bold">{oferta.centro}</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
