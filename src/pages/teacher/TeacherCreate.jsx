import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RequireAuth from '../../components/RequireAuth';
import { areas, trainingCenters } from '../../data/mockCatalogs';

const TeacherCreate = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        area_id: '',
        training_center_id: '',
        urlFoto: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'urlFoto') {
            setFormData({ ...formData, urlFoto: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría el envío con Axios/Fetch usando FormData para manejar el archivo
        console.log('Datos a enviar:', formData);
        navigate('/teacher');
    };

    return (
        <RequireAuth>
        <div className="py-5 rounded-4" style={{ backgroundColor: '#f4f6f9' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                            <div
                                className="card-header text-white text-center py-4"
                                style={{ backgroundColor: '#39A900', borderBottom: 'none' }}
                            >
                                <h4 className="mb-0 fw-bold">Registrar Instructor</h4>
                                <p className="mb-0 mt-1 small opacity-75">Ingrese los datos del docente y su vinculidad</p>
                            </div>

                            <div className="card-body p-4 p-md-5 bg-white">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="form-floating mb-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Nombre completo"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="name" className="text-secondary">Nombre Completo</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Correo electrónico"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="email" className="text-secondary">Correo Electrónico Institucional</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <select
                                            name="area_id"
                                            id="teacher_area_id"
                                            className="form-select"
                                            value={formData.area_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Seleccione una opción...</option>
                                            {areas.map((area) => (
                                                <option key={area.id} value={area.id}>{area.name}</option>
                                            ))}
                                        </select>
                                        <label htmlFor="teacher_area_id" className="text-secondary">Área de Especialidad</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <select
                                            name="training_center_id"
                                            id="teacher_center_id"
                                            className="form-select"
                                            value={formData.training_center_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Seleccione una opción...</option>
                                            {trainingCenters.map((training) => (
                                                <option key={training.id} value={training.id}>{training.name}</option>
                                            ))}
                                        </select>
                                        <label htmlFor="teacher_center_id" className="text-secondary">Centro de Formación Asignado</label>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="urlFoto" className="form-label fw-bold text-secondary mb-1">
                                            Fotografía del Instructor
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light text-secondary border-end-0 rounded-start-3">
                                                <i className="bi bi-image"></i>
                                            </span>
                                            <input
                                                type="file"
                                                name="urlFoto"
                                                id="urlFoto"
                                                className={`form-control border-start-0 rounded-end-3 focus-ring ${errors.urlFoto ? 'is-invalid' : ''
                                                    }`}
                                                accept="image/*"
                                                onChange={handleChange}
                                            />
                                            {errors.urlFoto && <div className="invalid-feedback">{errors.urlFoto}</div>}
                                        </div>
                                        <div className="text-muted small mt-1 ps-1">
                                            Formatos permitidos: JPG, PNG, WEBP.
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-5">
                                        <Link to="/" className="btn btn-outline-secondary px-4 py-2 fw-medium rounded-3">
                                            Cancelar
                                        </Link>
                                        <button type="submit" className="btn btn-dark px-5 py-2 fw-bold rounded-3">
                                            Registrar Instructor
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="p-3 bg-light text-center border-top">
                                <Link
                                    to="/teacher"
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
        </RequireAuth>
    );
};

export default TeacherCreate;