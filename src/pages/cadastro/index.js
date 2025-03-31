import React, { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
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

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
  
    const handleCadastro = async () => {
      if (!email || !password) {
        alert("Preencha todos os campos!");
        return;
      }
    
      const user = {
        email,
        password,
      };
      console.log(user);
      // Salva o usuário no AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(user));
      console.log("Usuário cadastrado com sucesso!");
      alert("Usuário cadastrado com sucesso!");
      navigation.navigate("Login"); // 👈 correção aqui
    };
    const handleLogin = () => {
      navigation.navigate("Login");
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

        <Text style={styles.title}>Se torne um Herói!</Text>
        
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
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>

        </TouchableOpacity>
         <Text style={styles.footerText} onPress={handleLogin}>
              Já sou um{' '}
              <Text style={styles.linkRed}>Super-Herói</Text>
          </Text>

      </ImageBackground>
      </View>
 
  );
}
