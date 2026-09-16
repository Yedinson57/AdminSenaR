import React, { useState } from 'react';
import RequireAuth from '../../components/RequireAuth';
import IndexHeader from '../../components/IndexHeader';
import ActionButtons from '../../components/ActionButtons';

export default function CourseIndex() {
  const [items, setItems] = useState([{ id: 1, course_number: 'C-101', day: 'Martes', training_center: { name: 'Centro de Comercio y Servicios' }, cohort: { code: '2874057' } }]);

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de eliminar este curso?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="py-4">
        <div className="container">
          <IndexHeader
            title="Listado de Cursos"
            description="Cursos asociados a fichas, centros y ambientes."
            createTo="/course/create"
            createLabel="Nuevo Curso"
          />
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                  <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                    <tr>
                      <th className="ps-4 py-3">ID</th><th className="py-3">Número</th><th className="py-3">Día</th><th className="py-3">Centro</th><th className="py-3">Ficha</th><th className="text-center py-3">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="ps-4 fw-bold text-secondary">#{item.id}</td><td>{item.course_number}</td><td>{item.day}</td><td>{item.training_center?.name}</td><td>{item.cohort?.code}</td>
                        <td className="text-center">
                          <ActionButtons
                            showTo={`/course/${item.id}`}
                            editTo={`/course/${item.id}/edit`}
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
