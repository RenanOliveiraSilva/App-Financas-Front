import { TouchableOpacity, Text } from "react-native";
import { s } from "./styles";
import { router } from "expo-router";

export function Button() {
    return (
        <TouchableOpacity 
            style={s.container}
            activeOpacity={0.8}
            onPress={() => router.navigate("/login")}
        >
            <Text style={s.text}> 
                Comece Agora
            </Text>
        </TouchableOpacity>
            
    );
}