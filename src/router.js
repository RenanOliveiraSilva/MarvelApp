import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import { LogoHeader } from './pages/LogoHeader';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Filmes from './components/filmes/filmes';
import Herois from './components/herois/herois';
import Quadrinhos from './components/quadrinhos/quadrinhos';
import HeroDetail from './pages/HeroiDetail/HeroiDetail';
import Favoritos from './pages/Favorites/FavoriteHome/Favorite';
import HeroisFavoritos from './pages/Favorites/FavoriteHero/Favorite';
import ComicsFavoritos from './pages/Favorites/FavoriteSeries/Favotire';
import ComicDetail from './pages/ComicsDetail/ComicDetail';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Series"
        component={Filmes}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: () => <LogoHeader />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="Quadrinhos"
        component={Quadrinhos}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: () => <LogoHeader />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="Herois"
        component={Herois}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: () => <LogoHeader />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: () => <LogoHeader />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="HeroisFavoritos"
        component={HeroisFavoritos}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: () => <LogoHeader />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Favoritos')}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="ComicsFavoritos"
        component={ComicsFavoritos}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: () => <LogoHeader />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Favoritos')}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="HeroDetail"
        component={HeroDetail}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: () => <LogoHeader />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="ComicDetail"
        component={ComicDetail}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: () => <LogoHeader />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      
    </Stack.Navigator>
  );
}
