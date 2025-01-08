import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
    baseURL: 'https://app-financas-ccby.onrender.com/api',
    timeout: 15000,
})

// Interceptador para Adicionar o Token
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});