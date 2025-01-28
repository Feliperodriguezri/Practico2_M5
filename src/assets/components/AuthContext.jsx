import React, { createContext, useState, useEffect } from 'react';
import { fetchUser, login as authLogin, logout as authLogout } from '../../utils/authUtils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const storedUser = await fetchUser();
                if (storedUser) {
                    setUser(storedUser);
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (username, password) => {
        try {
            const loggedUser = await authLogin(username, password);
            if (loggedUser) {
                setUser(loggedUser)
            }
        } catch (error) {
            console.error('Error during login', error);
            throw error;
        }

    };

    const logout = async () => {
        await authLogout()
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};