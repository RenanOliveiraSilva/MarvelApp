import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import { Feather, MaterialIcons } from '@expo/vector-icons';
import { styles } from './style'; // Importando o arquivo de estilos
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigation = useNavigation();
  
    const handleLogin = async () => {
      const user = await AsyncStorage.getItem("user");
   
      if (!user) {
        alert("Nenhum usuário cadastrado!");
        return;
      }
      const userJson = JSON.parse(user);
      if (userJson.email === email && userJson.password === password) {
        navigation.navigate("Main");
      } else {
        alert("E-mail ou senha inválidos!");
      }
    };
  
    const handleCadastro = () => {
      navigation.navigate("Cadastro");
    };

  return (
    <View style={styles.container}>
      {/* Topo com imagem de quadrinhos + logo */}
      <ImageBackground
        source={require('../../../assets/comicBackground.png')}
        style={styles.topImage}
        resizeMode="cover"
      >
      </ImageBackground>

      {/* Bloco de login */}
        <ImageBackground
            source={require('../../../assets/backgroundInput.png')} // <-- imagem que você mostrou
            style={styles.loginContainer}
            resizeMode="cover"
        >

        <Text style={styles.title}>Bem vindo, Herói!</Text>
        
        {/* Input: Email */}
        <View>
            <View style={styles.input}>
            <Feather name="user" size={20} color="#991B1B" style={styles.icon} />
            <TextInput
                placeholder="Email"
                placeholderTextColor="#991B1B"
                style={styles.inputText}
                value={email}
                onChangeText={setEmail}
                />
            </View>

        {/* Input: Senha */}
            <View style={styles.input}>
            <Feather name="lock" size={20} color="#991B1B" style={styles.icon} />
            <TextInput
                placeholder="Senha"
                placeholderTextColor="#991B1B"
                style={styles.inputText}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                />
            <MaterialIcons name="visibility-off" size={20} color="#991B1B" />
            </View>
        </View>

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText} onPress={handleCadastro}>
          Não possui uma conta?{' '}
          <Text style={styles.linkRed}>Cadastre-se</Text>
        </Text>
      </ImageBackground>
      </View>
 
  );
}
