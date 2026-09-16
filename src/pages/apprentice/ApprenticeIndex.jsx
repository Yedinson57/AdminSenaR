import React, { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import IndexHeader from '../../components/IndexHeader';
import ActionButtons from '../../components/ActionButtons';

export default function ApprenticeIndex() {
  const [items, setItems] = useState([{ id: 1, name: 'Ana Gómez', email: 'agomez@soy.sena.edu.co', cell_number: '3001234567', course: { course_number: 'C-101' } }]);

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de eliminar este aprendiz?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="py-4">
        <div className="container">
          <IndexHeader
            title="Listado de Aprendices"
            description="Aprendices matriculados, sus cursos y equipos asignados."
            createTo="/apprentice/create"
            createLabel="Nuevo Aprendiz"
          />
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                  <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                    <tr>
                      <th className="ps-4 py-3">ID</th><th className="py-3">Nombre</th><th className="py-3">Email</th><th className="py-3">Celular</th><th className="py-3">Curso</th><th className="text-center py-3">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-secondary">#{item.id}</td><td className="fw-bold">{item.name}</td><td>{item.email}</td><td>{item.cell_number}</td><td>{item.course?.course_number}</td>
                        <td className="text-center">
                          <ActionButtons
                            showTo={`/apprentice/${item.id}`}
                            editTo={`/apprentice/${item.id}/edit`}
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
