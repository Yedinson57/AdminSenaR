import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AreaCreate() {
    const [name, setName] = useState('');
    const [urlFoto, setUrlFoto] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Preparado para enviar con FormData a la API de Laravel
        const formData = new FormData();
        formData.append('name', name);
        if (urlFoto) formData.append('urlFoto', urlFoto);

        console.log('Datos listos para enviar:', { name, urlFoto });
        // axios.post('/api/areas', formData)...

        navigate('/area');
    };

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
                                <h4 className="mb-0 fw-bold">Registrar Nueva Área</h4>
                                <p className="mb-0 mt-1 small opacity-75">
                                    Complete los datos solicitados a continuación
                                </p>
                            </div>

                            <div className="card-body p-4 p-md-5 bg-white">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control focus-ring"
                                            id="name"
                                            placeholder="Nombre del área"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="name" className="text-secondary">
                                            Nombre oficial del área
                                        </label>
                                    </div>

                                    <div className="text-muted small mb-4 ps-1">
                                        💡 Ej. Sistemas, Gestión Administrativa, Agropecuaria, etc.
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">
                                            Fotografía del Área
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light text-secondary border-end-0 rounded-start-3">
                                                <i className="bi bi-image"></i>
                                            </span>
                                            <input
                                                type="file"
                                                id="urlFoto"
                                                className="form-control border-start-0 rounded-end-3 focus-ring"
                                                accept="image/*"
                                                onChange={(e) => setUrlFoto(e.target.files[0])}
                                            />
                                        </div>
                                        <div className="text-muted small mt-1 ps-1">
                                            Formatos permitidos: JPG, PNG, WEBP.
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <Link to="/" className="btn btn-outline-secondary px-4 py-2 fw-medium rounded-3">
                                            Cancelar
                                        </Link>
                                        <button type="submit" className="btn btn-dark px-5 py-2 fw-bold rounded-3">
                                            Guardar Registro
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="p-3 bg-light text-center border-top">
                                <Link
                                    to="/area"
                                    className="btn text-white fw-bold px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
                                    style={{ backgroundColor: '#39A900' }}
                                >
                                    Revisar Registros
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}