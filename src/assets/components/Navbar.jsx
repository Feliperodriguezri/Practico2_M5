import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Navbar() {
    const { user } = useContext(AuthContext);
    const isAuthenticated = !!user

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Hospital App
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nosotros">
                                Nosotros
                            </Link>
                        </li>
                        {isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/equipo-medico">
                                        Equipo Medico
                                    </Link>
                                </li>
                                {user.role === 'doctor' &&
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/registro-pacientes">
                                            Registro Pacientes
                                        </Link>
                                    </li>
                                }
                                {user.role === 'admin' &&
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin">
                                            Panel de Administrador
                                        </Link>
                                    </li>
                                }
                            </>
                        )}

                        {!isAuthenticated && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                        {isAuthenticated && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    Logout
                                </Link>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;