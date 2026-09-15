import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [userSession, setUserSession] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Comprobar la sesión al cargar el componente
    useEffect(() => {
        const session = JSON.parse(localStorage.getItem('user_session'));
        if (session) {
            setUserSession(session);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user_session');
        localStorage.removeItem('user_role');
        setUserSession(null);
        navigate('/login');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/apprentice?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow" style={{ backgroundColor: '#39A900' }}>
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center text-white fw-bold" to="/">
                    <img
                        src="https://diba.planeacionycalidad.org/diba/Views/representante/logo-blanco-sena-sin-fondo.png"
                        alt="logo_sena"
                        width="80"
                        height="45"
                        className="d-inline-block align-text-top me-2"
                    />
                    <span className="fs-5 tracking-tight">Admin Sena</span>
                </Link>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link text-white px-2 active fw-semibold" to="/about">
                                ¿Quiénes Somos?
                            </Link>
                        </li>

                        {/* Menú visible solo si existe sesión de usuario */}
                        {userSession && (
                            <li className="nav-item dropdown" id="adminDropdownNav">
                                <a
                                    className="dropdown-toggle text-light text-decoration-none fw-medium px-3 spear-dropdown"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Administración
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2">
                                    <li><Link className="dropdown-item py-2" to="/area/create">Área</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/trainingcenter/create">Centro</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/teacher/create">Instructor</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/program/create">Programa</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/offer/create">Oferta</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/cohort/create">Ficha</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/environment/create">Ambiente</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/advertisement/create">Anuncio</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/computer/create">Equipo</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/course/create">Curso</Link></li>
                                    <li><Link className="dropdown-item py-2" to="/apprentice/create">Aprendiz</Link></li>
                                </ul>
                            </li>
                        )}
                    </ul>

                    <form onSubmit={handleSearch} className="d-flex me-lg-3 my-2 my-lg-0" role="search">
                        <div className="input-group">
                            <input
                                className="form-control border-0 shadow-sm"
                                type="search"
                                placeholder="Buscar registros"
                                aria-label="Buscar"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-dark fw-bold px-3" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>

                    {/* Autenticación reactiva */}
                    <div className="d-flex align-items-center">
                        {userSession ? (
                            <div className="dropdown">
                                <a
                                    href="#"
                                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                    id="profileDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src={userSession.avatar}
                                        alt={userSession.name}
                                        width="38"
                                        height="38"
                                        className="rounded-circle border border-2 border-white shadow-sm me-2 object-fit-cover"
                                    />
                                    <span className="fw-bold d-none d-md-inline small">{userSession.name}</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-3 mt-2" aria-labelledby="profileDropdown">
                                    <li>
                                        <div className="px-3 py-2 border-bottom">
                                            <p className="fw-bold mb-0 text-dark small">{userSession.name}</p>
                                            <small className="text-muted">{userSession.email}</small>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="dropdown-item text-danger fw-bold py-2">
                                            <i className="bi bi-box-arrow-right me-2"></i> Cerrar Sesión
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-light text-success fw-bold btn-sm px-3 rounded-3 shadow-sm d-flex align-items-center gap-1">
                                <i className="bi bi-person-circle"></i> Iniciar Sesión
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}