import React from 'react';
import { Link } from 'react-router-dom';
import { anuncios } from '../../data/publicContent';

export default function AnunciosIndex() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold" style={{ color: '#00324D' }}>Anuncios e Informativos</h2>
          <p className="text-muted mb-0">Comunicados oficiales para la comunidad SENA</p>
        </div>
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
        </Link>
      </div>
      <div className="row g-4">
        {anuncios.map((anuncio) => (
          <div className="col-md-6" key={anuncio.id}>
            <div className="card h-100 border-2 shadow-sm rounded-4 overflow-hidden">
              <img src={anuncio.imagen} className="card-img-top" alt={anuncio.titulo} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">{anuncio.categoria}</span>
                  <small className="text-muted"><i className="bi bi-calendar3 me-1"></i>{anuncio.fecha}</small>
                </div>
                <h5 className="fw-bold text-dark mt-2">{anuncio.titulo}</h5>
                <p className="text-muted small mb-3">{anuncio.resumen}</p>
                <Link to={`/anuncios/${anuncio.id}`} className="btn text-white fw-bold w-100 rounded-3" style={{ backgroundColor: '#39A900' }}>
                  Leer Anuncio Completo <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
