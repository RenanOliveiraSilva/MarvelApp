import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function ComicDetail() {
  const route = useRoute();
  const { comic } = route.params;

  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const stored = await AsyncStorage.getItem('favorites_comics');
    if (stored) {
      const parsed = JSON.parse(stored);
      setFavorites(parsed);
      setIsFavorite(parsed.some((item) => item.id === comic.id));
    }
  };

  const toggleFavorite = async () => {
    let updated = [];

    if (isFavorite) {
      updated = favorites.filter((item) => item.id !== comic.id);
    } else {
      updated = [...favorites, comic];
    }

    setFavorites(updated);
    setIsFavorite(!isFavorite);
    await AsyncStorage.setItem('favorites_comics', JSON.stringify(updated));
  };

  const hasThumbnail =
    comic?.thumbnail &&
    !comic.thumbnail.path.includes('image_not_available');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {hasThumbnail && (
          <Image
            source={{ uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}` }}
            style={styles.comicImage}
            resizeMode="contain"
          />
        )}

        <Text style={styles.comicTitle}>{comic.title}</Text>
        <Text style={styles.comicSub}>Publicado por: Marvel Comics</Text>

        <View style={styles.stars}>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Text key={i} style={styles.star}>
                ★
              </Text>
            ))}
        </View>

        <Text style={styles.aboutTitle}>Sinopse</Text>
        <Text style={styles.description}>
          {comic.description ||
            'Este quadrinho ainda não possui uma descrição cadastrada na API da Marvel.'}
        </Text>
      </View>

      <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
        <Text style={styles.favoriteText}>
          {isFavorite ? '★ Remover dos Favoritos' : '☆ Adicionar aos Favoritos'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0c26',
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 80,
  },
  card: {
    width: width * 0.9,
    backgroundColor: '#1c1b40',
    borderRadius: 16,
    padding: 20,
    paddingTop: 40,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    marginTop: '12%',
  },
  comicImage: {
    position: 'absolute',
    top: -20,
    right: -40,
    width: 180,
    height: 180,
    opacity: 0.6,
    zIndex: 0,
  },
  comicTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    zIndex: 1,
  },
  comicSub: {
    color: '#ccc',
    marginBottom: 12,
    zIndex: 1,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 16,
    zIndex: 1,
  },
  star: {
    color: '#E11D48',
    fontSize: 20,
    marginRight: 4,
  },
  aboutTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    zIndex: 1,
  },
  description: {
    color: '#ccc',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'justify',
    zIndex: 1,
  },
  favoriteButton: {
    backgroundColor: '#E11D48',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  favoriteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
