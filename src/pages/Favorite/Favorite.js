import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { fetchHeroByName } from '../../services/api';
import NavBar from '../../components/navbar/navbar';

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  const navigation = useNavigation();

  const handleAddHero = async () => {
    if (!search.trim()) return;
  
    setSearchLoading(true);
    const hero = await fetchHeroByName(search.trim());
    setSearchLoading(false);
  
    setSearch(''); // 👈 limpa o input independente do resultado
  
    if (!hero) {
      Alert.alert('Não encontrado', 'Nenhum herói com esse nome foi encontrado.');
      return;
    }
  
    const alreadyAdded = favorites.some((item) => item.id === hero.id);
    if (alreadyAdded) {
      Alert.alert('Já favoritado', 'Esse herói já está na sua lista de favoritos.');
      return;
    }
  
    const updated = [...favorites, hero];
    setFavorites(updated);
    await AsyncStorage.setItem('favorites', JSON.stringify(updated));
  };
  
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const stored = await AsyncStorage.getItem('favorites');
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

      <Text style={styles.title}>Seus Heróis Favoritos</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar herói pelo nome"
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleAddHero}
          style={styles.input}
          returnKeyType="search"
        />
        {searchLoading && (
          <ActivityIndicator size="small" color="#E11D48" style={{ marginTop: 8 }} />
        )}
      </View>

      {favorites.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.empty}>Nenhum herói favoritado ainda.</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          style={{ paddingHorizontal: 16 }}
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
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0c26'
    
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: '8%',
  },
  inputContainer: {
    marginBottom: 16,
    paddingHorizontal: 16
  },
  input: {
    backgroundColor: '#1c1b40',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1b40',
    marginBottom: 12,
    borderRadius: 8,
    padding: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  empty: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  loadingText: {
    color: '#fff',
    marginTop: 12,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0c26',
  },
});
