import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPass, setRegPass] = useState('');
    const [regPassConfirm, setRegPassConfirm] = useState('');
    const navigate = useNavigate();

    const executeRegister = (e) => {
        e.preventDefault();

        if (regPass !== regPassConfirm) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const nameTrimmed = regName.trim();
        const emailTrimmed = regEmail.trim();

        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameTrimmed)}&background=39A900&color=fff&bold=true`;

        const userSession = {
            name: nameTrimmed,
            email: emailTrimmed,
            avatar: avatarUrl
        };

        // Guardar sesión en LocalStorage
        localStorage.setItem('user_session', JSON.stringify(userSession));

        // Redireccionar al home
        navigate('/');
    };

    return (
        <>
            <style>{`
                .register-full-bg {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: linear-gradient(rgba(208, 222, 226, 0.8), rgba(0, 0, 0, 0.85)), 
                url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLw-L18oaXvM8MuD9p3DLDX4BpsuXx3QRFmRwje9UZZHyA1aQym1Xa0_j&s=10') center/cover no-repeat;
                z-index: -1;
            }

            .register-wrapper {
                min-height: calc(100vh - 80px);
                display: flex;
                align-items: center;
                justify-content: center;
                }
            `}</style>

            <div className="register-full-bg"></div>

            <div className="container register-wrapper py-5">
                <div className="row justify-content-center w-100">
                    <div className="col-sm-10 col-md-8 col-lg-5">

                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                            {/* Encabezado */}
                            <div className="card-header text-white text-center py-4 border-0" style={{ backgroundColor: '#39A900' }}>
                                <div className="mb-2">
                                    <i className="bi bi-person-plus-fill display-5"></i>
                                </div>
                                <h4 className="fw-bold mb-0">Crear Cuenta</h4>
                                <small className="opacity-75">SISTEMA DE GESTIÓN ACADÉMICA SENA</small>
                            </div>

                            {/* Formulario */}
                            <div className="card-body p-4 bg-white">
                                <form id="registerPageForm" onSubmit={executeRegister}>

                                    {/* Nombre Completo */}
                                    <div className="mb-3">
                                        <label htmlFor="regName" className="form-label small fw-bold text-muted text-uppercase">
                                            <i className="bi bi-person me-1"></i> Nombre Completo
                                        </label>
                                        <input
                                            type="text"
                                            id="regName"
                                            className="form-control bg-light border-0 rounded-3 py-2"
                                            placeholder="Ej: Maria López"
                                            value={regName}
                                            onChange={(e) => setRegName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Correo Electrónico */}
                                    <div className="mb-3">
                                        <label htmlFor="regEmail" className="form-label small fw-bold text-muted text-uppercase">
                                            <i className="bi bi-envelope me-1"></i> Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="regEmail"
                                            className="form-control bg-light border-0 rounded-3 py-2"
                                            placeholder="ejemplo@sena.edu.co"
                                            value={regEmail}
                                            onChange={(e) => setRegEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Contraseña */}
                                    <div className="mb-3">
                                        <label htmlFor="regPass" className="form-label small fw-bold text-muted text-uppercase">
                                            <i className="bi bi-key me-1"></i> Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            id="regPass"
                                            className="form-control bg-light border-0 rounded-3 py-2"
                                            placeholder="••••••••"
                                            value={regPass}
                                            onChange={(e) => setRegPass(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Confirmar Contraseña */}
                                    <div className="mb-4">
                                        <label htmlFor="regPassConfirm" className="form-label small fw-bold text-muted text-uppercase">
                                            <i className="bi bi-check-circle me-1"></i> Confirmar Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            id="regPassConfirm"
                                            className="form-control bg-light border-0 rounded-3 py-2"
                                            placeholder="••••••••"
                                            value={regPassConfirm}
                                            onChange={(e) => setRegPassConfirm(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Botón Registro */}
                                    <div className="d-grid mb-3">
                                        <button type="submit" className="btn text-white fw-bold py-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#39A900' }}>
                                            <span>Registrarse</span>
                                            <i className="bi bi-arrow-right-circle fs-5"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Pie de Tarjeta */}
                            <div className="card-footer bg-light border-0 py-3 text-center">
                                <div className="mb-2">
                                    <span className="small text-muted">¿Ya tienes cuenta?</span>
                                    <Link to="/auth/login" className="text-decoration-none small fw-bold ms-1" style={{ color: '#39A900' }}>
                                        Iniciar Sesión
                                    </Link>
                                </div>

                                <div className="border-top pt-2 mt-2">
                                    <Link to="/" className="text-decoration-none small text-muted">
                                        <i className="bi bi-arrow-left me-1"></i> Volver al Inicio
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}