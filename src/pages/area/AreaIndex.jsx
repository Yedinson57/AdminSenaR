import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AreaIndex() {
    // Datos de prueba (Mock Data)
    const [areas, setAreas] = useState([
        { id: 1, name: 'Sistemas e Informática', urlFoto: 'https://via.placeholder.com/600x400' },
        { id: 2, name: 'Gestión Administrativa', urlFoto: null },
        { id: 3, name: 'Agropecuaria', urlFoto: 'https://via.placeholder.com/600x400' },
    ]);

    const [selectedModalArea, setSelectedModalArea] = useState(null);

    const handleDelete = (id) => {
        if (window.confirm('¿Está completamente seguro de eliminar esta área?')) {
            setAreas(areas.filter((area) => area.id !== id));
        }
    };

    return (
        <div className="py-4">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                    <div>
                        <h2 className="fw-bold text-dark mb-1">Listado de Áreas</h2>
                        <p className="text-muted small mb-0">
                            Visualice, edite o elimine las áreas de formación registradas.
                        </p>
                    </div>
                    <Link
                        to="/area/create"
                        className="btn text-white fw-bold px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
                        style={{ backgroundColor: '#39A900' }}
                    >
                        Nueva Área
                    </Link>
                </div>

                <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                <thead className="table-dark" style={{ backgroundColor: '#212529' }}>
                                    <tr>
                                        <th className="ps-4 py-3" style={{ width: '15%' }}>Código ID</th>
                                        <th className="py-3" style={{ width: '40%' }}>Nombre del Área</th>
                                        <th className="py-3" style={{ width: '20%' }}>Imagen Representativa</th>
                                        <th className="text-center py-3" style={{ width: '25%' }}>Acciones de Gestión</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {areas.map((area) => (
                                        <tr key={area.id}>
                                            <td className="ps-4 fw-bold text-secondary">#{area.id}</td>
                                            <td className="fw-medium text-dark">{area.name}</td>
                                            <td>
                                                {area.urlFoto ? (
                                                    <button
                                                        type="button"
                                                        className="btn p-0 border-0 bg-transparent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#modalFotoArea"
                                                        onClick={() => setSelectedModalArea(area)}
                                                        title="Clic para ampliar"
                                                    >
                                                        <img
                                                            src={area.urlFoto}
                                                            alt={`Imagen de ${area.name}`}
                                                            width="80"
                                                            height="80"
                                                            className="shadow-sm border rounded-3"
                                                            style={{ objectFit: 'cover', cursor: 'pointer' }}
                                                        />
                                                    </button>
                                                ) : (
                                                    <span className="badge bg-light text-secondary border py-2 px-3 rounded-3">
                                                        Sin foto
                                                    </span>
                                                )}
                                            </td>

                                            <td className="text-center">
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <Link
                                                        to={`/area/${area.id}`}
                                                        className="btn btn-sm btn-light border fw-medium d-inline-flex justify-content-center align-items-center"
                                                        style={{ width: '80px', height: '32px' }}
                                                    >
                                                        Ver
                                                    </Link>

                                                    <Link
                                                        to={`/area/${area.id}/edit`}
                                                        className="btn btn-sm btn-outline-dark fw-medium d-inline-flex justify-content-center align-items-center"
                                                        style={{ width: '80px', height: '32px' }}
                                                    >
                                                        Editar
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(area.id)}
                                                        className="btn btn-sm btn-danger fw-medium d-inline-flex justify-content-center align-items-center"
                                                        style={{ width: '80px', height: '32px' }}
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

                {/* Modal Único para Vista Previa */}
                <div
                    className="modal fade"
                    id="modalFotoArea"
                    tabIndex="-1"
                    aria-labelledby="modalFotoLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
                            <div className="modal-header text-white" style={{ backgroundColor: '#39A900' }}>
                                <h5 className="modal-title fw-bold" id="modalFotoLabel">
                                    <i className="bi bi-image me-2"></i>
                                    {selectedModalArea?.name}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-center p-4 bg-light">
                                {selectedModalArea?.urlFoto && (
                                    <img
                                        src={selectedModalArea.urlFoto}
                                        alt={selectedModalArea.name}
                                        className="img-fluid rounded-3 shadow-sm"
                                        style={{ maxHeight: '60vh', objectFit: 'contain' }}
                                    />
                                )}
                            </div>
                            <div className="modal-footer bg-white border-top-0 d-flex justify-content-between">
                                <span className="text-muted small">
                                    Código ID: #{selectedModalArea?.id}
                                </span>
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

            </div>
        </div>
    );
}