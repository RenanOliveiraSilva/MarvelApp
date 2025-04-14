import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../../../components/navbar/navbar';
import { styles } from './style';

export default function Favoritos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <NavBar initialTab="Favoritos" />
      <Text style={styles.title}>O que você quer ver?</Text>

      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('ComicsFavoritos')}>
          <ImageBackground
            source={require('../../../../assets/comics.jpg')}
            style={styles.card}
            imageStyle={{ borderRadius: 16 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>📚 Quadrinhos</Text>
              <Text style={styles.cardAction}>Ver meus favoritos</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Series')}>
          <ImageBackground
            source={require('../../../../assets/comics.jpg')}
            style={styles.card}
            imageStyle={{ borderRadius: 16 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>🎬 Séries</Text>
              <Text style={styles.cardAction}>Ver meus favoritos</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HeroisFavoritos')}>
          <ImageBackground
            source={require('../../../../assets/comics.jpg')}
            style={styles.card}
            imageStyle={{ borderRadius: 16 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>🦸‍♂️ Heróis</Text>
              <Text style={styles.cardAction}>Ver meus favoritos</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}
