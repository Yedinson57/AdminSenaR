import React, { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import IndexHeader from '../../components/IndexHeader';
import ActionButtons from '../../components/ActionButtons';

export default function AdvertisementIndex() {
  const [items, setItems] = useState([{ id: 1, title: 'Mantenimiento LMS', category: 'Sistemas', publish_date: '2026-08-25', author: 'Coordinación Académica' }]);

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de eliminar este anuncio?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="py-4">
        <div className="container">
          <IndexHeader
            title="Listado de Anuncios"
            description="Comunicados internos del centro de formación."
            createTo="/advertisement/create"
            createLabel="Nuevo Anuncio"
          />
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                  <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                    <tr>
                      <th className="ps-4 py-3">ID</th><th className="py-3">Título</th><th className="py-3">Categoría</th><th className="py-3">Fecha</th><th className="py-3">Autor</th><th className="text-center py-3">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.title}</td><td>{item.category}</td><td>{item.publish_date}</td><td>{item.author}</td>
                        <td className="text-center">
                          <ActionButtons
                            showTo={`/advertisement/${item.id}`}
                            editTo={`/advertisement/${item.id}/edit`}
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
