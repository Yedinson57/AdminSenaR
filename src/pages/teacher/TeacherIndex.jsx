import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';

const TeacherIndex = () => {
    const [teachers, setTeachers] = useState([
        {
            id: 1,
            name: 'Carlos Pérez',
            email: 'cperez@sena.edu.co',
            area: { name: 'Sistemas e Informática' },
            training_center: { name: 'Centro de Comercio y Servicios' },
            urlFoto: null,
        },
    ]);

    const handleDelete = (id) => {
        if (window.confirm('¿Está seguro de eliminar este instructor?')) {
            setTeachers(teachers.filter((teacher) => teacher.id !== id));
        }
    };

    return (
        <RequireAuth>
        <div className="py-4">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                    <div>
                        <h2 className="fw-bold text-dark mb-1">Listado de Instructores</h2>
                        <p className="text-muted small mb-0">Gestione el cuerpo docente, sus correos de contacto y asignaciones.</p>
                    </div>
                    <Link
                        to="/teacher/create"
                        className="btn text-white fw-bold px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
                        style={{ backgroundColor: '#39A900' }}
                    >
                        Nuevo Instructor
                    </Link>
                </div>

                <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table id="idTeacher" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                                    <tr>
                                        <th className="ps-4 py-3">ID</th>
                                        <th className="py-3">Nombre</th>
                                        <th className="py-3">Email</th>
                                        <th className="py-3">Área</th>
                                        <th className="py-3">Centro de Formación</th>
                                        <th className="py-3" style={{ width: '15%' }}>Imagen Representativa</th>
                                        <th className="text-center py-3" style={{ width: '30%' }}>Acciones de Gestión</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {teachers.map((teacher) => (
                                        <tr key={teacher.id}>
                                            <td className="ps-4 fw-bold text-secondary">#{teacher.id}</td>
                                            <td className="fw-bold text-dark">{teacher.name}</td>
                                            <td className="text-secondary small">{teacher.email}</td>
                                            <td>
                                                <span className="badge bg-secondary-subtle text-secondary border px-2 py-1 rounded">
                                                    {teacher.area?.name || 'No asignada'}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="badge bg-success-subtle text-success border px-2 py-1 rounded">
                                                    {teacher.training_center?.name || 'No asignado'}
                                                </span>
                                            </td>

                                            {/* Columna de Imagen con Modal de Bootstrap */}
                                            <td>
                                                {teacher.urlFoto ? (
                                                    <>
                                                        <button
                                                            type="button"
                                                            className="btn p-0 border-0 d-inline-block text-decoration-none"
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#modalFoto${teacher.id}`}
                                                            title="Clic para ampliar"
                                                        >
                                                            <img
                                                                src={`/storage/images/${teacher.urlFoto}`}
                                                                alt={`Imagen de ${teacher.name}`}
                                                                width="80"
                                                                height="80"
                                                                className="shadow-sm border"
                                                                style={{
                                                                    objectFit: 'cover',
                                                                    borderRadius: '8px',
                                                                    cursor: 'pointer',
                                                                    transition: 'transform 0.2s',
                                                                }}
                                                                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                                                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                                            />
                                                        </button>

                                                        {/* Modal de React / Bootstrap */}
                                                        <div
                                                            className="modal fade"
                                                            id={`modalFoto${teacher.id}`}
                                                            tabIndex="-1"
                                                            aria-labelledby={`modalFotoLabel${teacher.id}`}
                                                            aria-hidden="true"
                                                        >
                                                            <div className="modal-dialog modal-dialog-centered">
                                                                <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
                                                                    <div className="modal-header text-white" style={{ backgroundColor: '#39A900' }}>
                                                                        <h5 className="modal-title fw-bold" id={`modalFotoLabel${teacher.id}`}>
                                                                            <i className="bi bi-image me-2"></i>{teacher.name}
                                                                        </h5>
                                                                        <button
                                                                            type="button"
                                                                            className="btn-close btn-close-white"
                                                                            data-bs-dismiss="modal"
                                                                            aria-label="Close"
                                                                        ></button>
                                                                    </div>
                                                                    <div className="modal-body text-center p-4 bg-light">
                                                                        <img
                                                                            src={`/storage/images/${teacher.urlFoto}`}
                                                                            alt={`Imagen de ${teacher.name}`}
                                                                            className="img-fluid rounded-3 shadow-sm"
                                                                            style={{ maxHeight: '70vh', objectFit: 'contain' }}
                                                                        />
                                                                    </div>
                                                                    <div className="modal-footer bg-white border-top-0 d-flex justify-content-between">
                                                                        <span className="text-muted small">Código ID: #{teacher.id}</span>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-secondary px-4 rounded-3"
                                                                            data-bs-dismiss="modal"
                                                                        >
                                                                            Cerrar
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <span className="badge bg-light text-secondary border py-2 px-3 rounded-3">Sin foto</span>
                                                )}
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <Link
                                                        to={`/teacher/${teacher.id}`}
                                                        className="btn btn-sm btn-light border fw-medium d-inline-flex justify-content-center align-items-center"
                                                        style={{ width: '90px', height: '32px' }}
                                                    >
                                                        Ver
                                                    </Link>

                                                    <Link
                                                        to={`/teacher/${teacher.id}/edit`}
                                                        className="btn btn-sm btn-outline-dark fw-medium d-inline-flex justify-content-center align-items-center"
                                                        style={{ width: '90px', height: '32px' }}
                                                    >
                                                        Editar
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(teacher.id)}
                                                        className="btn btn-sm btn-danger fw-medium d-inline-flex justify-content-center align-items-center"
                                                        style={{ width: '90px', height: '32px' }}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
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
};

export default TeacherIndex;