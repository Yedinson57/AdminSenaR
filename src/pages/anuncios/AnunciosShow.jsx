import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { anuncios } from '../../data/publicContent';

export default function AnunciosShow() {
  const { id } = useParams();
  const anuncio = anuncios.find((item) => String(item.id) === String(id));

  if (!anuncio) {
    return (
      <div className="container py-5 text-center">
        <h4>Anuncio no encontrado</h4>
        <Link to="/anuncios" className="btn btn-dark mt-3">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Link to="/anuncios" className="btn btn-link text-decoration-none text-muted mb-3 p-0">
            <i className="bi bi-arrow-left me-1"></i> Volver a Anuncios
          </Link>
          <div className="card border-2 shadow-sm rounded-4 overflow-hidden">
            <img src={anuncio.imagen} className="w-100" style={{ maxHeight: '350px', objectFit: 'cover' }} alt={anuncio.titulo} />
            <div className="card-body p-4 p-md-5 bg-white">
              <span className="badge px-3 py-2 rounded-pill text-white mb-3" style={{ backgroundColor: '#00324D' }}>{anuncio.categoria}</span>
              <h2 className="fw-bold text-dark mb-3">{anuncio.titulo}</h2>
              <div className="d-flex align-items-center gap-3 text-muted small border-bottom pb-3 mb-4">
                <span><i className="bi bi-person-fill me-1"></i>{anuncio.autor}</span>
                <span><i className="bi bi-calendar-event me-1"></i>{anuncio.fecha}</span>
              </div>
              <p className="fs-6 text-secondary mb-0">{anuncio.contenido}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
