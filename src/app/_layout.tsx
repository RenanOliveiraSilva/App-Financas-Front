import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import { colors } from "@/styles/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

//Componentes
import ToastComponent from "@/components/toast";
import { Loading } from "@/components/loading";

//Importando as fonts
import {    
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins"


export default function _Layout() {
    const [fonstLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    })


    if (!fonstLoaded) {
        return <Loading colorLoading="gray" />
    }

    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <StatusBar backgroundColor="transparent" translucent={true} />

                <Stack screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: colors.gray.base

                    },
                }} />
                <ToastComponent />

            </SafeAreaProvider>
        </GestureHandlerRootView>
        
    );
}