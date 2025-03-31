import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Main from './pages/Main';
import { LogoHeader } from './pages/LogoHeader';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator(); 
// Mover para o escopo global

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
                name="Main"
                component={Main}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: () => <LogoHeader />,
                    headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 16 }}>
                        <Feather name="arrow-left" size={24} color="#fff" />
                    </TouchableOpacity>
                    ),
                    headerRight: () => (
                    <TouchableOpacity onPress={() => console.log("Buscar")} style={{ paddingRight: 16 }}>
                        <Feather name="search" size={24} color="#fff" />
                    </TouchableOpacity>
                    ),
                })}
            />

        </Stack.Navigator>
    )
}