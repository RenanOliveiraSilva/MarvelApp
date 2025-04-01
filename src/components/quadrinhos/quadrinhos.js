import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import { fetchComics } from '../../services/api';
import NavBar from '../navbar/navbar';

export default function Quadrinhos() {
  const [recentComics, setRecentComics] = useState([]);
  const [titleSortedComics, setTitleSortedComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadComics() {
      setLoading(true);
      const byDate = await fetchComics('-onsaleDate');
      const byTitle = await fetchComics('title');

      setRecentComics(
        byDate.filter((item) => !item.thumbnail.path.includes('image_not_available'))
      );
      setTitleSortedComics(
        byTitle.filter((item) => !item.thumbnail.path.includes('image_not_available'))
      );
      setLoading(false);
    }

    loadComics();
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
              <Text style={styles.loadingText}>Carregando Quadrinhos...</Text>
          </View>
        </ImageBackground>
      );
    }

  return (
    <ImageBackground
      source={require("../../../assets/mainBackground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <NavBar initialTab="Quadrinhos" />

      <View style={styles.container}>
        <Text style={styles.title}>Lançamentos Recentes</Text>
        <FlatList
          data={recentComics}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                style={styles.image}
              />
              <Text style={styles.name}>{item.title}</Text>
            </View>
          )}
        />

        <Text style={styles.title}>Ordem Alfabética</Text>
        <FlatList
          data={titleSortedComics}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                style={styles.image}
              />
              <Text style={styles.name}>{item.title}</Text>
            </View>
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
