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

import NavBar from '../../../components/navbar/navbar';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native-web';

export default function Favoritos() {
  return (
    <View style={styles.container}>
      <NavBar initialTab="Favoritos" />
      <View style={styles.content}>
        <CardAvengers />
        <CardAvengers />
        <CardAvengers />
      </View>

    </View>
  );

}
