import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button } from '@/components/button';
import { s } from './styles';
import { colors } from '@/styles/theme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { api } from "@/services/api"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepConnected, setKeepConnected] = useState(false);

    async function handleLogin() {
        if(!email || !password) {
            Alert.alert('Erro', 'Preencha todos os campos')
            return
        }

        try {
            const response = await api.post('/users/login', {
                email,
                password
            });

            if (response.status === 200) {
                const token = response.data.token;

                // Armazenar o Token Localmente
                await AsyncStorage.setItem('token', token);
                Alert.alert('Sucesso', 'Login realizado com sucesso!');
                
                return;
            }


        } catch (error: any) {
            Alert.alert('Erro', 'Credenciais inválidas');
            console.log(error);
        }

    }

    return (
        <View style={s.container}>
            <Text style={s.title}>
                Bem-Vindo 
            </Text>

            {/* Input de Email */}
            <View style={s.inputContainer}>
                <FontAwesome5 name="user" size={18} color={colors.gray.light} />

                <TextInput
                    style={s.input}
                    placeholder="E-mail"
                    placeholderTextColor= {colors.gray.light}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    selectionColor={colors.purple.light}
                />
            </View>
            <View style={s.inputContainer}>
                <MaterialIcons name="lock" size={18} color={colors.gray.light} />

                {/* Input de Senha */}
                <TextInput
                    style={s.input}
                    placeholder="Senha"
                    placeholderTextColor={colors.gray.light}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    selectionColor={colors.purple.light}
                />

            </View>

            <View style={s.mantenhaConectado}>
                <TouchableOpacity
                    style={keepConnected ? [s.checkbox, { backgroundColor: colors.purple.light }] : s.checkbox}
                    onPress={() => {
                        setKeepConnected(!keepConnected);
                    }}
                />

                <Text style={s.subtitle}>
                    Manter conectado?
                </Text>
            </View>


            {/* Botão de Envio */}
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={s.button}>
                    <Button 
                        textbutton='Entrar' 
                        onPress={handleLogin}
                    />

                </View>
            </View>


            <View style={s.forgotPassword}>
                <Text style={s.subtitle}>
                    Esqueceu a senha?
                </Text>
            </View>

            <View style={s.dontHaveAccount}>
                <Text style={s.subtitle}>
                    Ainda não tem uma conta?
                </Text>
                <Text style={s.subtitlePurple}>
                    Cadastre-se
                </Text>
            </View>
        </View>
    );
}