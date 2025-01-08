import { TouchableOpacity, Text } from "react-native";
import { s } from "./styles";

interface buttonProps {
    textbutton: string;
    onPress: () => void;
}

export function Button({textbutton, onPress}: buttonProps ) {
    return (
        <TouchableOpacity 
            style={s.container}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Text style={s.text}> 
                {textbutton}
            </Text>
        </TouchableOpacity>
            
    );
}