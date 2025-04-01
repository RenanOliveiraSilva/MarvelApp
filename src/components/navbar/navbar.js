import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

const tabs = ['Séries', 'Quadrinhos', 'Heróis', 'Favoritos'];

const routes = {
  'Séries': 'Series',
  'Quadrinhos': 'Quadrinhos',
  'Heróis': 'Herois',
  'Favoritos': 'Favoritos'
};

export default function NavBar({ initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => {
              setActiveTab(tab);
              navigation.navigate(routes[tab]);
            }}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab
            ]}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
