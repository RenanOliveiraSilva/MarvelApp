import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { styles } from './style';

export default function CardAvengers() {
  return (
    <ImageBackground
      source={require('../../../assets/avengers-bg.jpg')} // Exemplo de imagem
      style={styles.card}
      resizeMode="cover"
    >
      {/* Overlay para escurecer a imagem */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Avengers</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sapiente adipisci numquam odio.
        </Text>
      </View>

      {/* Opcional: swirl decorativa no canto */}
      <Image
        source={require('../../../assets/swirl.png')}
        style={styles.swirl}
      />
    </ImageBackground>
  );
}
