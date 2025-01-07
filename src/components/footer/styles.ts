import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    footer: {
        position: 'relative',   
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 150
    },
    button: {
        position: 'absolute', // Posiciona o botão em relação ao contêiner pai
        bottom: 55,          // Move o botão para ficar próximo ao fundo da imagem
        zIndex: 1, 
        width: 230,
    }
})