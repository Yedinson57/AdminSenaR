import React from 'react';

export default function About() {
    return (
        <div className="container py-4">
            <div className="row mb-5 text-center">
                <div className="col-lg-8 mx-auto">
                    <span className="badge px-3 py-2 fs-6 rounded-pill text-white mb-2" style={{ backgroundColor: '#39A900' }}>
                        <i className="bi bi-building me-1"></i> Nuestra Institución
                    </span>
                    <h1 className="fw-bold display-5 text-dark">Servicio Nacional de Aprendizaje</h1>
                    <p className="lead text-muted">
                        Conoce el propósito y la proyección institucional del SENA en el desarrollo social, técnico y tecnológico de Colombia.
                    </p>
                </div>
            </div>

            <div className="row g-4 mb-5">
                <div className="col-md-6">
                    <div className="card h-100 border-1 border-success shadow-lg rounded-4 overflow-hidden">
                        <div className="card-header border-1 border-success py-3 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#39A900' }}>
                            <i className="bi bi-bullseye fs-3"></i>
                            <h3 className="card-title fw-bold mb-0">Misión</h3>
                        </div>
                        <div className="card-body p-4 bg-white fs-6 text-secondary lh-lg">
                            <p className="card-text mb-0">
                                El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la <strong>formación profesional integral</strong>, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país <em>(Ley 119/1994)</em>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 border-1 border-primary shadow-lg rounded-4 overflow-hidden">
                        <div className="card-header border-1 border-primary py-3 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#00324D' }}>
                            <i className="bi bi-eye-fill fs-3"></i>
                            <h3 className="card-title fw-bold mb-0">Visión</h3>
                        </div>
                        <div className="card-body p-4 bg-white fs-6 text-secondary lh-lg">
                            <p className="card-text mb-0">
                                Para el año 2026, el Servicio Nacional de Aprendizaje – SENA estará a la vanguardia de la cualificación del talento humano, tanto a nivel nacional como internacional. Esto se logrará a través de la formación profesional integral, el empleo, el emprendimiento y el reconocimiento de aprendizajes previos. Nuestro objetivo es generar valor público y fortalecer la economía campesina, popular, verde y digital, siempre con un enfoque diferencial orientado a la construcción del cambio, la transformación productiva, la soberanía alimentaria y la consolidación de una paz total, materializando así la autonomía territorial, y promoviendo la justicia social, ambiental y económica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row text-center mt-4">
                <div className="col-md-4 mb-3">
                    <div className="p-3 bg-white rounded-3 shadow-lg border border-success h-100">
                        <i className="bi bi-journal-check text-success fs-1 mb-2"></i>
                        <h5 className="fw-bold">Formación Integral</h5>
                        <p className="small text-muted mb-0">Educación teórica y práctica adaptada a las necesidades reales del sector productivo.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="p-3 bg-white rounded-3 shadow-lg border border-warning h-100">
                        <i className="bi bi-lightbulb-fill text-warning fs-1 mb-2"></i>
                        <h5 className="fw-bold">Innovación y Tecnología</h5>
                        <p className="small text-muted mb-0">Uso de tecnologías de punta y actualización constante en áreas de conocimiento.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="p-3 bg-white rounded-3 shadow-lg border border-info h-100">
                        <i className="bi bi-people-fill text-primary fs-1 mb-2"></i>
                        <h5 className="fw-bold">Inclusión Social</h5>
                        <p className="small text-muted mb-0">Oportunidades de formación para todos los ciudadanos en todo el territorio nacional.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}