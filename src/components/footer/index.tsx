import { View, Image } from 'react-native';
import { s } from './styles';
import { Button } from '../button';


export function Footer() {
    return (
        <View style={s.footer}>
            <View style={s.button}>
                <Button />

            </View>
            <Image 
                source={require('@/assets/footer.png')}
            />
        </View>
    );
}