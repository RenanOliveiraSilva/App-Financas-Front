import { useEffect, useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserProfile() {
    const { id } = useLocalSearchParams();
    const [tokenValid, setTokenValid] = useState(false);

    useEffect(() => {
        async function checkToken() {
            const token = await AsyncStorage.getItem('token');

            // ✅ Se não houver token, redireciona para a tela de login
            if (!token) {
                Alert.alert('Acesso Negado', 'Faça login para continuar');
                router.replace('/');
            } else {
                setTokenValid(true);
            }
        }
        checkToken();
    }, []);

    if (!tokenValid) {
        return <Text>Verificando autenticação...</Text>; // Tela de loading básica
    }

    return (
        <View>
            <Text>Bem-vindo ao perfil do usuário</Text>
            <Text>ID do usuário: {id}</Text>
        </View>
    );
}
