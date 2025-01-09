import { View, Image } from 'react-native';
import { s } from './styles';
import { Button } from '../button';
import { router } from 'expo-router';

export function Footer() {
    return (
        <View style={s.footer}>
            <View style={s.button}>
                <Button 
                    textbutton='Comece Agora' 
                    onPress={() => router.navigate("/login")} 
                    isLoading={false}
                />

            </View>
            <Image 
                source={require('@/assets/footer.png')}
            />
        </View>
    );
}