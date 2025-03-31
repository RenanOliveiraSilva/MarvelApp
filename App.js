import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/router';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator color="red" size={'large'} />; // ou um componente de carregamento
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
      <Routes />
    </NavigationContainer>
  );
}
