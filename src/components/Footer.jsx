// Este es el pie de pagina del aplicativo
import React from 'react';

// creamos la funcion y la exporto para el footer
export default function Footer() {
    // creamos una funcion para mostrar la fecha
    const currentYear = new Date().getFullYear();

    // retornamos el footer traido desde admin sena usando bootstrap
    return (
        <footer className="bg-dark text-white py-5 mt-5 border-top border-secondary">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <h5 className="text-white mb-1 fw-bold">Yedinson Ortiz Pino</h5>
                        <p className="small text-light mb-0 fw-medium">Ficha: 3223899</p>
                    </div>

                    <div className="col-md-6 text-center text-md-end">
                        <h5 className="fw-bold text-uppercase tracking-wider" style={{ color: '#39A900' }}>
                            React Admin SENA
                        </h5>
                        <p className="small text-white-50 mb-0">Panel de Administración Académica</p>
                    </div>
                </div>

                <hr className="my-4 border-light opacity-25" />

                <div className="row small text-white-50">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; {currentYear} Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
                        <span className="text-light">Desarrollado para la evaluación del instructor</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}