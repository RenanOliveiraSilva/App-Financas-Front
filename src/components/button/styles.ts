import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 40,
        maxHeight: 40,
        backgroundColor: colors.gray.light,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 14,
    },
    text: {
        fontFamily: fontFamily.bold,
        fontSize: 14,
    }
})