import React from 'react'
import { View, ImageBackground, StyleSheet, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import Constants from "expo-constants";

//Pages
import Login from '@/components/login/form';

export default function Index() {
  const image = require('@/assets/Home.png');
  const StatusBarHeight = Constants.statusBarHeight;
  
  return (
    <ImageBackground 
      source={image}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={{marginTop: StatusBarHeight, flex: 1, justifyContent: 'space-between'}}>
          <View style={{ 
              width: '100%', 
              flexDirection: 'row',  // Alinhar itens horizontalmente
              justifyContent: 'flex-end', // Alinha o ícone à direita
              padding: 20
          }}>
            
            <Feather name="help-circle" size={35} color="white" />
          </View>
        
        <Login />
          
          
        </View>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(50, 45, 45, 0.7)',
  },
  text: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
  }
  
});