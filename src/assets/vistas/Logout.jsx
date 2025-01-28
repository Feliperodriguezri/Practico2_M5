import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';

function Logout() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                await logout();
                navigate('/login', { replace: true });
            } catch (err) {
                console.error("Logout Error:", err)
            }
        };
        handleLogout();
    }, [logout, navigate])


    return <p>Cerrando sesión...</p>;
}

export default Logout;