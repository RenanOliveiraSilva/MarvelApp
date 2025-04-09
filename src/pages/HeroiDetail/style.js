import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0d0c26',
      flexGrow: 1,
      alignItems: 'center',
      paddingTop: 50,
      paddingBottom: 80,
    },
    card: {
      width: width * 0.9,
      backgroundColor: '#1c1b40',
      borderRadius: 16,
      padding: 20,
      paddingTop: 40,
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
      marginTop: "12%"
    },
    heroImage: {
      position: 'absolute',
      top: -20,
      right: -40,
      width: 180,
      height: 180,
      opacity: 0.6, // bem sutil
      zIndex: 0,
    },
    heroName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      zIndex: 1,
    },
    heroSub: {
      color: '#ccc',
      marginBottom: 12,
      zIndex: 1,
    },
    stars: {
      flexDirection: 'row',
      marginBottom: 16,
      zIndex: 1,
    },
    star: {
      color: '#E11D48',
      fontSize: 20,
      marginRight: 4,
    },
    aboutTitle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 8,
      zIndex: 1,
    },
    description: {
      color: '#ccc',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'justify',
      zIndex: 1,
    },
    favoriteButton: {
      backgroundColor: '#E11D48',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignSelf: 'center',
      marginTop: 16,
    },
    favoriteText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 14,
    }
  });
  