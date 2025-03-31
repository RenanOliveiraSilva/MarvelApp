import { Text, View, ImageBackground, StyleSheet } from "react-native";
import NavBar from "../../components/navbar/navbar";
import Filmes from "../../components/filmes/filmes";

export default function Main() {
    return (
        <ImageBackground
            source={require("../../../assets/mainBackground.png")} // <-- imagem que você mostrou
            style={styles.background}
            resizeMode="cover"
        >
            <NavBar />
            <Filmes />
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
       
    },
});