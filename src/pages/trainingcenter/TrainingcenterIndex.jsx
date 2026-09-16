import React, { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import IndexHeader from '../../components/IndexHeader';
import ActionButtons from '../../components/ActionButtons';

export default function TrainingcenterIndex() {
  const [items, setItems] = useState([{ id: 1, name: 'Centro de Comercio y Servicios', location: 'Neiva', urlFoto: 'https://via.placeholder.com/600x400' }]);

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de eliminar este centro de formación?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="py-4">
        <div className="container">
          <IndexHeader
            title="Listado de Centros de Formación"
            description="Sedes operacionales y complejos regionales registrados en el sistema."
            createTo="/trainingcenter/create"
            createLabel="Nuevo Centro"
          />
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                  <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                    <tr>
                      <th className="ps-4 py-3">ID</th><th className="py-3">Nombre</th><th className="py-3">Ubicación</th><th className="text-center py-3">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold text-dark">{item.name}</td><td>{item.location}</td>
                        <td className="text-center">
                          <ActionButtons
                            showTo={`/trainingcenter/${item.id}`}
                            editTo={`/trainingcenter/${item.id}/edit`}
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
