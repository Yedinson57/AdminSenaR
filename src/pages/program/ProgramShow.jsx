import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { formatDate } from '../../utils/formatDate';

export default function ProgramShow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem({
      id,
      name: 'ADSO', description: 'Análisis y Desarrollo de Software', type: 'Tecnólogo', modality: 'Presencial', duration: '24 meses', area_id: 1, urlFoto: 'https://via.placeholder.com/600x400',
      created_at: '2026-03-10T14:30:00Z',
      updated_at: '2026-03-15T09:15:00Z',
    });
  }, [id]);

  if (!item) return null;

  return (
    <RequireAuth>
      <FormCard title="Información del Programa" subtitle={item.name || item.title || item.code || `Registro #${item.id}`}>
        
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Nombre</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.name}</div>
        </div>
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Descripción</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.description}</div>
        </div>
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Tipo</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.type}</div>
        </div>
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Modalidad</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.modality}</div>
        </div>
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Duración</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.duration}</div>
        </div>
        {item.urlFoto ? (
          <div className="mb-4 text-center">
            <img src={item.urlFoto} alt="" className="rounded-3 img-fluid" style={{ maxHeight: '250px', objectFit: 'cover' }} />
          </div>
        ) : (
          <div className="p-4 border rounded-4 bg-light text-muted mb-4">
            <i className="bi bi-image fs-1 d-block mb-2"></i>
            <span>Sin fotografía asignada</span>
          </div>
        )}
        <div className="row g-3 mb-4">
          <div className="col-sm-6">
            <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Fecha de registro</span>
            <div className="p-2 bg-light rounded-2 small text-secondary">{formatDate(item.created_at)}</div>
          </div>
          <div className="col-sm-6">
            <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Última modificación</span>
            <div className="p-2 bg-light rounded-2 small text-secondary">{formatDate(item.updated_at)}</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="button" onClick={() => navigate('/program')} className="btn btn-dark px-4 py-2 fw-bold rounded-3">
            Volver al Listado
          </button>
        </div>
      </FormCard>
    </RequireAuth>
  );
}
