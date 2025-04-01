import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { fetchCharacters } from '../../services/api';
import { ImageBackground } from 'react-native';
import NavBar from '../navbar/navbar';
import { useNavigation } from '@react-navigation/native';

export default function Herois() {
  const [recentSeries, setRecentSeries] = useState([]);
  const [titleSortedSeries, setTitleSortedSeries] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 novo estado
  const navigation = useNavigation(); // 👈 hook para navegação

  useEffect(() => {
    async function loadSeries() {
      setLoading(true);
      const byDate = await fetchCharacters('-modified');
      const byTitle = await fetchCharacters('name');

      setRecentSeries(
        byDate.filter((item) => !item.thumbnail.path.includes('image_not_available'))
      );

      setTitleSortedSeries(
        byTitle.filter((item) => !item.thumbnail.path.includes('image_not_available'))
      );

      setLoading(false); // 👈 encerra o loading
    }

    loadSeries();
  }, []);

  if (loading) {
    return (
        <ImageBackground
        source={require("../../../assets/mainBackground.png")} // <-- imagem que você mostrou
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#B3001B" />
            <Text style={styles.loadingText}>Carregando heróis...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
      <ImageBackground
        source={require("../../../assets/mainBackground.png")} // <-- imagem que você mostrou
        style={styles.background}
        resizeMode="cover"
      >
          <NavBar initialTab="Heróis" />
                <View style={styles.container}>
                  <Text style={styles.title}>Mais Antigos</Text>
                  <FlatList
                    data={recentSeries}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                      onPress={() => navigation.navigate('HeroDetail', { hero: item })}
                      style={styles.card}
                      >
                        <Image
                          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                          style={styles.image}
                        />
                        <Text style={styles.name}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />

                  <Text style={styles.title}>Ordem Alfabética</Text>
                  <FlatList
                    data={titleSortedSeries}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                      onPress={() => navigation.navigate('HeroDetail', { hero: item })}
                      style={styles.card}
                      >
                        <Image
                          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                          style={styles.image}
                        />
                        <Text style={styles.name}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 22,
      color: '#fff',
      marginBottom: 16,
      fontWeight: 'bold',
    },
    card: {
      marginBottom: 20,
      alignItems: 'center',
      marginRight: 25,
    },
    image: {
      width: 100,
      height: 200,
      borderRadius: 8,
    },
    name: {
      marginTop: 8,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 10,
      textAlign: 'center',
      width: 100, // 👈 mesma largura da imagem
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingText: {
      marginTop: 12,
      color: '#fff',
      fontSize: 16,
    },
    background: {
      flex: 1,
     
    }
  });
  