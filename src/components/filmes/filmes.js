import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { fetchSeries } from '../../services/api';

export default function Filmes() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function loadSeries() {
      const data = await fetchSeries();
      setSeries(data);
    }
    loadSeries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Séries da Marvel</Text>
      <FlatList
        data={series}
        keyExtractor={(item) => item.id.toString()}
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
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
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
    },
    image: {
      width: 200,
      height: 300,
      borderRadius: 8,
    },
    name: {
      marginTop: 8,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  