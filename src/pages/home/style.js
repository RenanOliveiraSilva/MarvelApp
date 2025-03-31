import { StyleSheet } from "react-native";
import { fontFamily } from "../../styles/fontText";

export const s = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.5)', // escurece a imagem de fundo
    },
    content: {
      paddingHorizontal: 12,
      paddingTop: 100,
      alignItems: 'center'
    },
    title: {
      fontSize: 32,
      color: '#fff',
      fontWeight: 'bold',
      letterSpacing: 2,
    },
    subtitle: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 32,
      fontStyle: 'italic',
    },
    description: {
      color: '#fff',
      width: '100px',
      textAlign: 'center',
      fontFamily: fontFamily.semiBold,
      fontSize: 14,
      marginBottom: 25,
      textShadowColor: '#000',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4,
      lineHeight: 28
    },
    footer: {
      paddingHorizontal: 24,
      paddingBottom: 40,
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#98192D',
      paddingVertical: 14,
      borderRadius: 10,
      width: '60%',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });