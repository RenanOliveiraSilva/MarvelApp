import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { s } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  
  return (
    <ImageBackground
      source={require('../../../assets/homeBackground.png')} // <-- imagem que você mostrou
      style={s.background}
      resizeMode="cover"
    >
      <View style={s.overlay} />

      <View style={s.content}>
        <Text style={s.description}>
          "Explore o Universo Marvel como nunca antes!"
           Descubra personagens, quadrinhos, eventos e mais em um só lugar.
        </Text>
      </View>
      <View style={s.footer}>
        <TouchableOpacity style={s.button} onPress={() => navigation.navigate('Login')}>
          <Text style={s.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


