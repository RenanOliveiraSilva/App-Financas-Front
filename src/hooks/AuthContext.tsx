import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        async function loadToken() {
            const storedToken = await AsyncStorage.getItem('token');
            setToken(storedToken);
        }
        loadToken();
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
