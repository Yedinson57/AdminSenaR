import React, { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import IndexHeader from '../../components/IndexHeader';
import ActionButtons from '../../components/ActionButtons';

export default function OfferIndex() {
  const [items, setItems] = useState([{ id: 1, day: 'Lunes a Viernes', registration_date: '2026-08-01', capacity: 30, program: { name: 'ADSO' } }]);

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de eliminar esta oferta?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="py-4">
        <div className="container">
          <IndexHeader
            title="Listado de Ofertas"
            description="Convocatorias asociadas a programas de formación."
            createTo="/offer/create"
            createLabel="Nueva Oferta"
          />
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                  <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                    <tr>
                      <th className="ps-4 py-3">ID</th><th className="py-3">Jornada</th><th className="py-3">Inscripción</th><th className="py-3">Cupos</th><th className="py-3">Programa</th><th className="text-center py-3">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-secondary">#{item.id}</td><td>{item.day}</td><td>{item.registration_date}</td><td>{item.capacity}</td><td>{item.program?.name}</td>
                        <td className="text-center">
                          <ActionButtons
                            showTo={`/offer/${item.id}`}
                            editTo={`/offer/${item.id}/edit`}
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
