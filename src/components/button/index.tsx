import { TouchableOpacity, Text } from "react-native";
import { s } from "./styles";
import { Loading } from "../loading";

interface buttonProps {
    textbutton: string;
    isLoading: boolean;
    onPress: () => void;
}

export function Button({textbutton, onPress, isLoading = false}: buttonProps ) {
    return (
        <TouchableOpacity 
            style={s.container}
            activeOpacity={0.8}
            onPress={onPress}
            disabled={isLoading}
        >
            <Text style={s.text}>
                {isLoading ? <Loading colorLoading="purple" /> : textbutton}
            </Text>
        </TouchableOpacity>
            
    );
}