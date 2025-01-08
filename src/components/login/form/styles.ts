import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    title: {
        fontFamily: fontFamily.bold,
        fontSize: 36,
        color: colors.gray.light,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 5,
        marginBottom: 2
    },
    input: {
        backgroundColor: colors.gray.base,
        borderRadius: 5,
        padding: 8,
        marginVertical: 10,
        color: colors.gray.light,
        width: '100%',
        fontFamily: fontFamily.medium,
        fontSize: 15,
        marginLeft: 10
    },
    inputContainer: {
        flexDirection: 'row',         // Ícone e Input lado a lado
        alignItems: 'center',
        backgroundColor: colors.gray.base,
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 15,
        paddingLeft: 25
    },
    subtitle: {
        color: colors.gray.light,
        fontFamily: fontFamily.medium,
        fontSize: 12,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 5,
        marginBottom: 2,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.gray.light,
        marginRight: 10,
    },
    mantenhaConectado: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    forgotPassword: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    button: {
        width: 230,
    },
    dontHaveAccount: {
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        paddingBottom: 10
    },
    subtitlePurple: {
        color: colors.purple.light,
        fontFamily: fontFamily.medium,
        fontSize: 12,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 5,
        marginBottom: 2,
    }

})