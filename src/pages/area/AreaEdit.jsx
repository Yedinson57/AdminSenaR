import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function AreaEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [currentFoto, setCurrentFoto] = useState(null);
    const [newFoto, setNewFoto] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulación de carga de datos desde API (ej. GET /api/areas/:id)
    useEffect(() => {
        // Reemplazar este bloque por tu petición axios/fetch
        setTimeout(() => {
            setName('Sistemas e Informática');
            setCurrentFoto('https://via.placeholder.com/600x400');
            setLoading(false);
        }, 300);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PUT'); // Convención de actualización Laravel API
        formData.append('name', name);
        if (newFoto) formData.append('urlFoto', newFoto);

        console.log(`Actualizando área #${id}:`, { name, newFoto });
        // axios.post(`/api/areas/${id}`, formData)...

        navigate('/area');
    };

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando información...</span>
                </div>
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
                                <h4 className="mb-0 fw-bold">Actualizar Área</h4>
                                <p className="mb-0 mt-1 small opacity-75">
                                    Modifique los parámetros del área seleccionada
                                </p>
                            </div>

                            <div className="card-body p-4 p-md-5 bg-white">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">

                                    <div className="mb-4">
                                        <label
                                            htmlFor="name"
                                            className="form-label text-muted small fw-bold text-uppercase tracking-wider"
                                        >
                                            Nombre del Área
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fw-medium"
                                            placeholder="Ingrese el nombre oficial"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Fotografía Actual */}
                                    {currentFoto && (
                                        <div className="mb-4 text-center">
                                            <span className="d-block text-secondary small fw-bold mb-2">
                                                Fotografía Actual
                                            </span>
                                            <div className="d-inline-block p-2 border rounded-4 bg-light shadow-sm">
                                                <img
                                                    src={currentFoto}
                                                    alt={`Foto ${name}`}
                                                    className="rounded-3 img-fluid"
                                                    style={{ maxHeight: '180px', objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Carga opcional de nueva fotografía */}
                                    <div className="mb-4">
                                        <label htmlFor="newFoto" className="form-label text-muted small fw-bold text-uppercase tracking-wider">
                                            Cambiar Fotografía (Opcional)
                                        </label>
                                        <input
                                            type="file"
                                            id="newFoto"
                                            className="form-control"
                                            accept="image/*"
                                            onChange={(e) => setNewFoto(e.target.files[0])}
                                        />
                                    </div>

                                    <hr className="my-4 opacity-25" />

                                    <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
                                        <button
                                            type="button"
                                            onClick={() => navigate(-1)}
                                            className="btn btn-light border fw-bold px-4 py-2 rounded-3"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn text-white fw-bold px-4 py-2 rounded-3 shadow-sm"
                                            style={{ backgroundColor: '#39A900' }}
                                        >
                                            Actualizar Área
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}