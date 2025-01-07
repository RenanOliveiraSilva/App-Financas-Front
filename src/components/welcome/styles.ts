import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    title: {
        fontFamily: fontFamily.bold,
        fontSize: 36,
        color: colors.gray.light,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 5,
        zIndex: 1,            // Garante que o texto fique acima da imagem
        lineHeight: 58,      // Espaçamento entre as linhas
        marginTop: 12
    },
    image: {
        position: 'absolute', // Torna a imagem flutuante
        right: 10,            // Posicionamento à direita
        bottom: 32,           // Levemente abaixo
        width: 115,
        height: 115,
        zIndex: 0,            // Garante que a imagem fique abaixo do texto
    },
    subtitle: {
        fontFamily: fontFamily.light,
        fontSize: 15,
        color: colors.gray.light,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 5,
        marginBottom: 2
    },
    content: {
        padding: 12,
        paddingRight: 22,
        paddingLeft: 22,
    }
});