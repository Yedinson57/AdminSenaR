import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const { login } = useContext(AuthContext); // Extraer función login
    const navigate = useNavigate();

    const executeLogin = (e) => {
        e.preventDefault();

        const nameTrimmed = userName.trim();
        const emailTrimmed = userEmail.trim();
        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameTrimmed)}&background=39A900&color=fff&bold=true`;

        const userData = {
            name: nameTrimmed,
            email: emailTrimmed,
            avatar: avatarUrl,
            role: 'admin'
        };

        // Actualiza el estado global y guarda en localStorage
        login(userData);

        // Redirecciona al Home
        navigate('/');
    };

    return (
        <>
            {/* Estilos CSS incrustados para el fondo y centrado */}
            <style>{`
                .login-full-bg {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: linear-gradient(rgba(208, 222, 226, 0.8), rgba(0, 0, 0, 0.85)), 
                            url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLw-L18oaXvM8MuD9p3DLDX4BpsuXx3QRFmRwje9UZZHyA1aQym1Xa0_j&s=10') center/cover no-repeat;
                z-index: -1;
                }

                .login-wrapper {
                min-height: calc(100vh - 80px);
                display: flex;
                align-items: center;
                justify-content: center;
                }
            `}</style>

            {/* Capa de imagen de fondo completo */}
            <div className="login-full-bg"></div>

            {/* Contenido del Formulario */}
            <div className="container login-wrapper py-5">
                <div className="row justify-content-center w-100">
                    <div className="col-sm-10 col-md-8 col-lg-4">

                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                            {/* Encabezado SENA */}
                            <div className="card-header text-white text-center py-4 border-0" style={{ backgroundColor: '#39A900' }}>
                                <div className="mb-2">
                                    <i className="bi bi-shield-lock-fill display-5"></i>
                                </div>
                                <h4 className="fw-bold mb-0">Iniciar Sesión</h4>
                                <small className="opacity-75">Ingrese sus credenciales de acceso</small>
                            </div>

                            {/* Formulario */}
                            <div className="card-body p-4 bg-white">
                                <form id="loginPageForm" onSubmit={executeLogin}>

                                    <div className="mb-3">
                                        <label htmlFor="userName" className="form-label small fw-bold text-muted text-uppercase">
                                            <i className="bi bi-person me-1"></i> Nombre Completo
                                        </label>
                                        <input
                                            type="text"
                                            id="userName"
                                            className="form-control bg-light border-0 rounded-3 py-2"
                                            placeholder="Ej: Carlos Pérez"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="userEmail" className="form-label small fw-bold text-muted text-uppercase">
                                            <i className="bi bi-envelope me-1"></i> Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="userEmail"
                                            className="form-control bg-light border-0 rounded-3 py-2"
                                            placeholder="ejemplo@sena.edu.co"
                                            value={userEmail}
                                            onChange={(e) => setUserEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="userPass" className="form-label small fw-bold text-muted text-uppercase">
                                            <i className="bi bi-key me-1"></i> Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            id="userPass"
                                            className="form-control bg-light border-0 rounded-3 py-2"
                                            placeholder="••••••••"
                                            value={userPass}
                                            onChange={(e) => setUserPass(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" class="btn text-white fw-bold py-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#39A900' }}>
                                            <span>Ingresar</span>
                                            <i className="bi bi-box-arrow-in-right fs-5"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Pie de página de la tarjeta */}
                            <div className="card-footer bg-light border-0 py-3 text-center">
                                <div className="mb-2">
                                    <span className="small text-muted">¿No tienes una cuenta?</span>
                                    <Link to="/auth/register" className="fw-bold text-decoration-none ms-1" style={{ color: '#39A900' }}>
                                        Regístrate aquí
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