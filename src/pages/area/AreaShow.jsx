import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function AreaShow() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [area, setArea] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulación de consulta a API (ej. GET /api/areas/:id)
    useEffect(() => {
        // Reemplazar por tu llamada Axios/Fetch
        setTimeout(() => {
            setArea({
                id: id,
                name: 'Sistemas e Informática',
                urlFoto: 'https://via.placeholder.com/600x400',
                created_at: '2026-03-10T14:30:00Z',
                updated_at: '2026-03-15T09:15:00Z',
            });
            setLoading(false);
        }, 300);
    }, [id]);

    // Formateador de fechas equivalente a Carbon d/m/Y H:i
    const formatDate = (isoString) => {
        if (!isoString) return 'N/A';
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando detalles...</span>
                </div>
            </div>
        );
    }

    if (!area) {
        return (
            <div className="container py-5 text-center">
                <h4>Registro no encontrado</h4>
                <Link to="/area" className="btn btn-dark mt-3">
                    Volver al Listado
                </Link>
            </div>
        );
    }

    return (
        <div className="py-5 rounded-4" style={{ backgroundColor: '#f4f6f9' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

                            <div
                                className="card-header text-white text-center py-4"
                                style={{ backgroundColor: '#39A900', borderBottom: 'none' }}
                            >
                                <h4 className="mb-0 fw-bold">Información del Área</h4>
                                <p className="mb-0 mt-1 small opacity-75">{area.name}</p>
                            </div>

                            <div className="card-body p-4 p-md-5 bg-white text-center text-sm-start">

                                <div className="mb-4">
                                    <span className="text-muted small d-block mb-1 fw-bold text-uppercase tracking-wider">
                                        Código ID
                                    </span>
                                    <div className="p-3 bg-light rounded-3 fw-bold text-secondary border-start border-3 border-secondary">
                                        #{area.id}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className="text-muted small d-block mb-1 fw-bold text-uppercase tracking-wider">
                                        Nombre Oficial
                                    </span>
                                    <div className="p-3 bg-light rounded-3 fw-medium text-dark">
                                        {area.name}
                                    </div>
                                </div>

                                {/* Visualización de la Imagen */}
                                <div className="mb-4 text-center">
                                    {area.urlFoto ? (
                                        <div className="d-inline-block p-2 border rounded-4 bg-light shadow-sm w-100">
                                            <img
                                                src={area.urlFoto}
                                                alt="Fotografía del área"
                                                className="rounded-3 img-fluid"
                                                style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className="p-4 border rounded-4 bg-light text-muted d-inline-block w-100"
                                            style={{ maxWidth: '300px' }}
                                        >
                                            <i className="bi bi-image fs-1 d-block mb-2 text-secondary"></i>
                                            <span className="fw-medium">Sin fotografía asignada</span>
                                        </div>
                                    )}
                                </div>

                                <hr className="my-4 opacity-25" />

                                <div className="row g-3 mb-4">
                                    <div className="col-sm-6">
                                        <span className="text-muted small d-block mb-1 fw-bold text-uppercase tracking-wider">
                                            Fecha de registro
                                        </span>
                                        <div className="p-2 bg-light rounded-2 small text-secondary">
                                            {formatDate(area.created_at)}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <span className="text-muted small d-block mb-1 fw-bold text-uppercase tracking-wider">
                                            Última modificación
                                        </span>
                                        <div className="p-2 bg-light rounded-2 small text-secondary">
                                            {formatDate(area.updated_at)}
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    <button
                                        type="button"
                                        onClick={() => navigate('/area')}
                                        className="btn btn-dark px-4 py-2 fw-bold rounded-3"
                                    >
                                        Volver al Listado
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}