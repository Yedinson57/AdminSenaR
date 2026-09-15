import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    const [userSession, setUserSession] = useState(null);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        // Verificar sesión guardada
        const session = localStorage.getItem('user_session');
        if (session) {
            setUserSession(JSON.parse(session));
        }

        // Control del botón Scroll To Top
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="container-fluid px-0 mb-5 rounded-3 overflow-hidden shadow-sm">
            {/* Carrusel Principal */}
            <Carousel fade interval={5000} id="homeCarousel">
                <Carousel.Item>
                    <div className="position-relative" style={{ height: '500px' }}>
                        <div className="w-100 h-100 bg-dark opacity-50 position-absolute top-0 start-0 z-1"></div>
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                            className="d-block w-100 h-100 object-fit-cover"
                            alt="Sena Tecnologico"
                        />
                    </div>
                    <Carousel.Caption className="d-none d-md-block z-2 mt-4">
                        <h1 className="display-4 fw-bold text-uppercase" style={{ color: '#39A900', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                            Admin SENA
                        </h1>
                        <p className="fs-4 fw-medium text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                            Bienvenido al Panel de Administración y Gestión de Procesos Académicos.
                        </p>
                        <Link to="/login" className="btn btn-light fw-bold px-4 py-2 mt-2">
                            Comenzar Registro
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="position-relative" style={{ height: '500px' }}>
                        <div className="w-100 h-100 bg-dark opacity-50 position-absolute top-0 start-0 z-1"></div>
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                            className="d-block w-100 h-100 object-fit-cover"
                            alt="Formacion Profesional"
                        />
                    </div>
                    <Carousel.Caption className="d-none d-md-block z-2 mt-4">
                        <h1 className="display-4 fw-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                            Conoce Ofertas Educativas
                        </h1>
                        <p className="fs-4 fw-medium text-white-50" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                            Explora las diversas ofertas educativas que tiene Sena disponibles.
                        </p>
                        <Link to="/ofertas" className="btn btn-success fw-bold px-4 py-2 mt-2" style={{ backgroundColor: '#39A900', borderColor: '#39A900' }}>
                            Ver Ofertas
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="position-relative" style={{ height: '500px' }}>
                        <div className="w-100 h-100 bg-dark opacity-50 position-absolute top-0 start-0 z-1"></div>
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                            className="d-block w-100 h-100 object-fit-cover"
                            alt="Gestion de Aprendices"
                        />
                    </div>
                    <Carousel.Caption className="d-none d-md-block z-2 mt-4">
                        <h1 className="display-4 fw-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                            Seguimiento de Eventos
                        </h1>
                        <p className="fs-4 fw-medium text-white-50" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                            Consulta los nuevos eventos que se encuentran disponibles.
                        </p>
                        <Link to="/eventos" className="btn btn-outline-light fw-bold px-4 py-2 mt-2">
                            Descubre más
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="position-relative" style={{ height: '500px' }}>
                        <div className="w-100 h-100 bg-dark opacity-50 position-absolute top-0 start-0 z-1"></div>
                        <img
                            src="https://www.las2orillas.co/wp-content/uploads/2023/08/Servicio-Nacional-de-Aprendizaje-SENA.jpg"
                            className="d-block w-100 h-100 object-fit-cover"
                            alt="Anuncios SENA"
                        />
                    </div>
                    <Carousel.Caption className="d-none d-md-block z-2 mt-4">
                        <h1 className="display-4 fw-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                            Seguimiento de Anuncios
                        </h1>
                        <p className="fs-4 fw-medium text-white-50" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                            Consulta en tiempo real anuncios sobre la institución.
                        </p>
                        <Link to="/anuncios" className="btn btn-outline-light fw-bold px-4 py-2 mt-2">
                            Saber más
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Sección de Anuncios y Noticias */}
            <div className="container mt-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-4">
                    <div>
                        <span className="badge px-3 py-2 fs-6 rounded-pill text-white mb-2" style={{ backgroundColor: '#39A900' }}>
                            <i className="bi bi-megaphone-fill me-1"></i> Novedades del Centro
                        </span>
                        <h2 className="fw-bold text-dark mb-0">Anuncios, Ofertas y Eventos</h2>
                    </div>
                    <div className="mt-2 mt-md-0">
                        <span className="text-muted small">Actualizado semanalmente</span>
                    </div>
                </div>

                {/* Alerta Destacada */}
                <div className="alert alert-warning border border-warning shadow-lg rounded-4 p-4 mt-4 d-flex align-items-start gap-3">
                    <div className="bg-warning text-dark p-3 rounded-circle d-none d-sm-block">
                        <i className="bi bi-exclamation-triangle-fill fs-3"></i>
                    </div>
                    <div>
                        <span className="badge bg-dark text-warning fw-bold mb-1">¡Importante!</span>
                        <h5 className="fw-bold mb-1 text-dark">Convocatoria de Formación Titulada Presencial 2026</h5>
                        <p className="mb-0 text-dark opacity-75">
                            Las inscripciones para la oferta de cursos técnicos y tecnólogos cierran este viernes. Asegúrate de verificar los cupos disponibles en la sección de cursos.
                        </p>
                    </div>
                </div>

                {/* Tarjetas de Novedades */}
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-1 border-secondary shadow-lg rounded-4 overflow-hidden card-hover">
                            <div className="card-header bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                                <span className="badge bg-success-subtle text-success border border-success fw-bold px-3 py-2 rounded-pill">
                                    <i className="bi bi-journal-plus me-1"></i> Oferta Educativa
                                </span>
                                <small className="text-muted"><i class="bi bi-calendar3 me-1"></i> 20 Ago 2026</small>
                            </div>
                            <div className="card-body px-4">
                                <h5 className="card-title fw-bold text-dark mb-2">Nuevo Tecnólogo en Desarrollo de Software</h5>
                                <p className="card-text text-secondary small mb-3">
                                    Abierta la preinscripción para la jornada nocturna. Aprende desarrollo web, bases de datos y desarrollo de APIs con metodologías ágiles.
                                </p>
                                <ul className="list-unstyled small text-muted mb-0">
                                    <li className="mb-1"><i className="bi bi-clock me-2 text-success"></i> 24 Meses (Lectiva + Práctica)</li>
                                    <li><i className="bi bi-geo-alt me-2 text-success"></i> Centro de Formación Central</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-light border-0 px-4 py-3 text-end">
                                <Link to="/ofertas" className="btn btn-sm text-white fw-bold px-3 rounded-3" style={{ backgroundColor: '#39A900' }}>
                                    Consultar ofertas <i className="bi bi-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-1 border-secondary shadow-lg rounded-4 overflow-hidden card-hover">
                            <div className="card-header bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                                <span className="badge bg-primary-subtle text-primary border border-primary fw-bold px-3 py-2 rounded-pill">
                                    <i className="bi bi-trophy me-1"></i> Evento
                                </span>
                                <small className="text-muted"><i className="bi bi-calendar3 me-1"></i> 28 Ago 2026</small>
                            </div>
                            <div className="card-body px-4">
                                <h5 className="card-title fw-bold text-dark mb-2">Feria de Innovación y Tecnología SENA</h5>
                                <p className="card-text text-secondary small mb-3">
                                    Exposición de proyectos formativos creados por los aprendices. Contaremos con la participación de empresas invitadas y muestra de prototipos.
                                </p>
                                <ul className="list-unstyled small text-muted mb-0">
                                    <li className="mb-1"><i className="bi bi-clock me-2 text-primary"></i> 8:00 AM – 4:00 PM</li>
                                    <li><i className="bi bi-geo-alt me-2 text-primary"></i> Auditorio Principal</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-light border-0 px-4 py-3 text-end">
                                <Link to="/eventos" className="btn btn-sm btn-outline-primary fw-bold px-3 rounded-3">
                                    Más Detalles <i className="bi bi-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 border-1 border-secondary shadow-lg rounded-4 overflow-hidden card-hover">
                            <div className="card-header bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                                <span className="badge bg-info-subtle text-info-emphasis border border-info fw-bold px-3 py-2 rounded-pill">
                                    <i className="bi bi-megaphone-fill me-1"></i> Anuncios
                                </span>
                                <small className="text-muted"><i className="bi bi-calendar3 me-1"></i> 02 Sep 2026</small>
                            </div>
                            <div className="card-body px-4">
                                <h5 className="card-title fw-bold text-dark mb-2">Taller de Hoja de Vida y Entrevistas</h5>
                                <p className="card-text text-secondary small mb-3">
                                    Organizado por Bienestar al Aprendiz. Aprende a redactar un perfil profesional atractivo para el inicio de tu etapa productiva.
                                </p>
                                <ul className="list-unstyled small text-muted mb-0">
                                    <li className="mb-1"><i className="bi bi-clock me-2 text-info"></i> 2:00 PM – 5:00 PM</li>
                                    <li><i className="bi bi-laptop me-2 text-info"></i> Modalidad Virtual (Teams)</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-light border-0 px-4 py-3 text-end">
                                <Link to="/anuncios" className="btn btn-sm btn-outline-dark fw-bold px-3 rounded-3">
                                    Conoce más <i className="bi bi-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bloque Condicional: Invitados vs Autenticados */}
                {!userSession ? (
                    <div className="my-4">
                        <div className="card border border-dark shadow-sm rounded-4 p-4 bg-light">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h5 className="fw-bold mb-1 text-dark">¿Eres Administrador o Instructor?</h5>
                                    <p className="mb-0 text-muted">Inicia sesión para gestionar las listas de aprendices y fichas de formación.</p>
                                </div>
                                <Link to="/login" className="btn text-white fw-bold px-4 py-2 rounded-3" style={{ backgroundColor: '#39A900' }}>
                                    <i className="bi bi-box-arrow-in-right me-1"></i> Iniciar Sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="my-4">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-4">
                            <h2 className="fw-bold text-dark mb-0">Acceso directo</h2>
                        </div>

                        <div className="row g-3 text-center mt-4">
                            <div className="col-6 col-md-4 col-lg-2">
                                <Link to="/apprentice" className="text-decoration-none">
                                    <div className="p-3 bg-white rounded-4 shadow-lg border border-success h-100 d-flex flex-column align-items-center justify-content-center">
                                        <i className="bi bi-people text-success fs-2 mb-2"></i>
                                        <span className="fw-bold text-dark small">Aprendices</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2">
                                <Link to="/course" className="text-decoration-none">
                                    <div className="p-3 bg-white rounded-4 shadow-lg border border-primary h-100 d-flex flex-column align-items-center justify-content-center">
                                        <i className="bi bi-journal-bookmark text-primary fs-2 mb-2"></i>
                                        <span className="fw-bold text-dark small">Cursos</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2">
                                <Link to="/teacher" className="text-decoration-none">
                                    <div className="p-3 bg-white rounded-4 shadow-lg border border-warning h-100 d-flex flex-column align-items-center justify-content-center">
                                        <i className="bi bi-person-badge text-warning fs-2 mb-2"></i>
                                        <span className="fw-bold text-dark small">Instructores</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2">
                                <Link to="/about" className="text-decoration-none">
                                    <div className="p-3 bg-white rounded-4 shadow-lg border border-info h-100 d-flex flex-column align-items-center justify-content-center">
                                        <i className="bi bi-building text-info fs-2 mb-2"></i>
                                        <span className="fw-bold text-dark small">Nosotros</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 col-md-4 col-lg-4">
                                <div className="p-3 bg-white rounded-4 shadow-lg border border-dark h-100 d-flex align-items-center justify-content-between px-4">
                                    <div className="text-start">
                                        <h6 className="fw-bold text-dark mb-0">¿Necesitas ayuda?</h6>
                                        <small className="text-muted">Consulta la Misión SENA</small>
                                    </div>
                                    <Link to="/about" className="btn btn-sm btn-outline-success fw-bold rounded-3">
                                        Saber más
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Botón flotante para subir */}
            <button
                type="button"
                className="btn text-white shadow-lg rounded-circle border-0 d-flex align-items-center justify-content-center"
                onClick={scrollToTop}
                title="Volver al principio"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#39A900',
                    zIndex: 1050,
                    opacity: showScroll ? 1 : 0,
                    pointerEvents: showScroll ? 'auto' : 'none',
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                <i className="bi bi-arrow-up-short fs-2"></i>
            </button>
        </div>
    );
}