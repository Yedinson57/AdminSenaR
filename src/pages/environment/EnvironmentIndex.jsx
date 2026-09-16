import React, { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import IndexHeader from '../../components/IndexHeader';
import ActionButtons from '../../components/ActionButtons';

export default function EnvironmentIndex() {
  const [items, setItems] = useState([{ id: 1, name: 'Ambiente 204', location: 'Bloque Tecnológico', training_center: { name: 'Centro de Comercio y Servicios' } }]);

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de eliminar este ambiente?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="py-4">
        <div className="container">
          <IndexHeader
            title="Listado de Ambientes"
            description="Ambientes de formación disponibles en cada centro."
            createTo="/environment/create"
            createLabel="Nuevo Ambiente"
          />
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                  <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                    <tr>
                      <th className="ps-4 py-3">ID</th><th className="py-3">Nombre</th><th className="py-3">Ubicación</th><th className="py-3">Centro</th><th className="text-center py-3">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.name}</td><td>{item.location}</td><td>{item.training_center?.name}</td>
                        <td className="text-center">
                          <ActionButtons
                            showTo={`/environment/${item.id}`}
                            editTo={`/environment/${item.id}/edit`}
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
