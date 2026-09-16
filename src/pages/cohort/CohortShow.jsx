import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import FormCard from '../../components/FormCard';
import { formatDate } from '../../utils/formatDate';

export default function CohortShow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem({
      id,
      code: '2874057', start_date: '2026-02-01', schedule: 'Diurna', offer_id: 1,
      created_at: '2026-03-10T14:30:00Z',
      updated_at: '2026-03-15T09:15:00Z',
    });
  }, [id]);

  if (!item) return null;

  return (
    <RequireAuth>
      <FormCard title="Información de la Ficha" subtitle={item.name || item.title || item.code || `Registro #${item.id}`}>
        
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Código</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.code}</div>
        </div>
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Fecha de inicio</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.start_date}</div>
        </div>
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Horario</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.schedule}</div>
        </div>
        <div className="mb-4">
          <span className="text-muted small d-block mb-1 fw-bold text-uppercase">Oferta</span>
          <div className="p-3 bg-light rounded-3 fw-medium text-dark">{item.offer_id}</div>
        </div>
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
          <button type="button" onClick={() => navigate('/cohort')} className="btn btn-dark px-4 py-2 fw-bold rounded-3">
            Volver al Listado
          </button>
        </div>
      </FormCard>
    </RequireAuth>
  );
}
