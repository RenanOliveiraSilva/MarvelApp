import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0c26'
      
    },
    title: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
      marginTop: '8%',
    },
    inputContainer: {
      marginBottom: 16,
      paddingHorizontal: 16,
      display: 'relative'
    },
    input: {
      backgroundColor: '#1c1b40',
      color: '#fff',
      padding: 12,
      borderRadius: 8,
      fontSize: 14
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1c1b40',
      marginBottom: 12,
      borderRadius: 8,
      height: 80,
      width: '100%'
    },
    image: {
      width: 80,
      height: '100%',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      marginRight: 16,
    },
    name: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    empty: {
      color: '#ccc',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20,
    },
    loadingText: {
      color: '#fff',
      marginTop: 12,
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0d0c26',
    },
  });
  