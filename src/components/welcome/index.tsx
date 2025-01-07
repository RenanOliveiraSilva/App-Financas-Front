import { View, Text, Image } from "react-native";
import { s } from "./styles";

export function Welcome() {
    return (
        <View style={s.content}>
            <Text style={s.subtitle}>
                Controle seus gastos de forma simples e 
                alcance a liberdade financeira com clareza.
            </Text>

            <View>
                <Text style={s.title}>
                    ORGANIZE SEU
                    DINHEIRO {"\n"}
                    EM {"\n"}
                    UM LUGAR
                </Text>
                <Image
                    source={require("@/assets/money.png")}
                    style={s.image}
                />
            </View>
        </View>
    );
}