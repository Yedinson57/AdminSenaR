import React, { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import IndexHeader from '../../components/IndexHeader';
import ActionButtons from '../../components/ActionButtons';

export default function CohortIndex() {
  const [items, setItems] = useState([{ id: 1, code: '2874057', start_date: '2026-02-01', schedule: 'Diurna', offer: { day: 'Lunes a Viernes' } }]);

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de eliminar esta ficha?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="py-4">
        <div className="container">
          <IndexHeader
            title="Listado de Fichas"
            description="Cohortes o fichas de formación asociadas a una oferta."
            createTo="/cohort/create"
            createLabel="Nueva Ficha"
          />
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                  <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                    <tr>
                      <th className="ps-4 py-3">ID</th><th className="py-3">Código</th><th className="py-3">Inicio</th><th className="py-3">Horario</th><th className="py-3">Oferta</th><th className="text-center py-3">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.code}</td><td>{item.start_date}</td><td>{item.schedule}</td><td>{item.offer?.day}</td>
                        <td className="text-center">
                          <ActionButtons
                            showTo={`/cohort/${item.id}`}
                            editTo={`/cohort/${item.id}/edit`}
                            onDelete={() => handleDelete(item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
