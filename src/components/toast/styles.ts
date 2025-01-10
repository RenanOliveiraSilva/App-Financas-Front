import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    warningToast: {
        borderLeftColor: 'orange',
        backgroundColor: colors.gray.light,

    },
    warningText: {
        color: 'orange',
        fontFamily: fontFamily.bold
    },
    infoToast: {
        borderLeftColor: '#008bff',
        backgroundColor: colors.gray.light,

    },
    infoText: {
        color: '#008bff',
        fontFamily: fontFamily.bold
    },
    successToast: {
        borderLeftColor: 'green',
        backgroundColor: colors.gray.light,

    },
    successText: {
        color: 'green',
        fontFamily: fontFamily.bold
    },
    errorToast: {
        borderLeftColor: 'red',
        backgroundColor: colors.gray.light,

    },
    errorText: {
        color: 'red',
        fontFamily: fontFamily.bold
    },
})