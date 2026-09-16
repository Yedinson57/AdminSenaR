import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userSession, setUserSession] = useState(null);

    // Cargar sesión inicial al abrir la app
    useEffect(() => {
        const session = localStorage.getItem('user_session');
        if (session) {
            try {
                setUserSession(JSON.parse(session));
            } catch (e) {
                console.error('Error al parsear user_session', e);
            }
        }
    }, []);

    // Función para Iniciar Sesión
    const login = (userData) => {
        localStorage.setItem('user_session', JSON.stringify(userData));
        localStorage.setItem('user_role', userData.role || 'admin');
        setUserSession(userData);
    };

    // Función para Cerrar Sesión
    const logout = () => {
        localStorage.removeItem('user_session');
        localStorage.removeItem('user_role');
        setUserSession(null);
    };

    return (
        <AuthContext.Provider value={{ userSession, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};