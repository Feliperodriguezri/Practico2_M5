import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import ProtectedRoute from './assets/components/ProtectedRoute';
import { AuthProvider } from './assets/components/AuthContext'; // Importa el AuthProvider

// importamos las vistas
import Home from './assets/vistas/home';
import Login from './assets/vistas/login';
import Logout from './assets/vistas/logout';
import Nosotros from './assets/vistas/nosotros';
import EquipoMedico from './assets/vistas/EquipoMedico';
import RegistroPacientes from './assets/vistas/RegistroPacientes';
import AdminPanel from './assets/vistas/AdminPanel';

function App() {
  return (
    <AuthProvider>  {/* Envolver la aplicación con AuthProvider */}
      <Router>
        <Navbar />
        <div className="container mt-5 ps-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route
              path="/equipo-medico"
              element={
                <ProtectedRoute allowedRoles={['doctor', 'admin']}>
                  <EquipoMedico />
                </ProtectedRoute>
              }
            />
            <Route
              path="/registro-pacientes"
              element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <RegistroPacientes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

