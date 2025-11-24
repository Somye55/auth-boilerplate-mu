import { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is already logged in
        const initAuth = () => {
            const currentUser = apiService.getCurrentUser();
            const isAuth = apiService.isAuthenticated();

            if (isAuth && currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        };

        initAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const data = await apiService.login(email, password);
            setUser(data.user);
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const signup = async (email, password) => {
        try {
            const data = await apiService.signup(email, password);
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        apiService.logout();
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
