import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { fectchComicsByName } from '../../../services/api';
import NavBar from '../../../components/navbar/navbar';
import { styles } from './style';

export default function ComicsFavoritos() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  const navigation = useNavigation();

  const handleAddComic = async () => {
    if (!search.trim()) return;

    setSearchLoading(true);
    const comic = await fectchComicsByName(search.trim());
    setSearchLoading(false);

    setSearch('');

    if (!comic) {
      Alert.alert('Não encontrado', 'Nenhum quadrinho com esse nome foi encontrado.');
      return;
    }

    const alreadyAdded = favorites.some((item) => item.id === comic.id);
    if (alreadyAdded) {
      Alert.alert('Já favoritado', 'Esse quadrinho já está na sua lista de favoritos.');
      return;
    }

    const updated = [...favorites, comic];
    setFavorites(updated);
    await AsyncStorage.setItem('favorites_comics', JSON.stringify(updated));
  };

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const stored = await AsyncStorage.getItem('favorites_comics');
        if (stored) {
          setFavorites(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = navigation.addListener('focus', loadFavorites);
    return unsubscribe;
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#B3001B" />
        <Text style={styles.loadingText}>Carregando favoritos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavBar initialTab="Favoritos" />

      <Text style={styles.title}>Seus Quadrinhos Favoritos</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar quadrinho pelo nome"
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleAddComic}
          style={styles.input}
          returnKeyType="search"
        />
        {searchLoading && (
          <ActivityIndicator size="small" color="#E11D48" style={{ zIndex: 1 }} />
        )}
      </View>

      {favorites.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.empty}>Nenhum quadrinho favoritado ainda.</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          style={{ paddingHorizontal: 16, marginTop: 16 }}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('HeroDetail', { hero: item })}
            >
              <Image
                source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                style={styles.image}
              />
              <Text style={styles.name}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
