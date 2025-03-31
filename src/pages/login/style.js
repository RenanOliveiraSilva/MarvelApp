import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topImage: {
      height: 300,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    loginContainer: {
      flex: 1,
      justifyContent: 'space-between',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 24,
      marginTop: -60,
      paddingVertical: 120
    },
    title: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 24,
      textAlign: 'center',
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FADADD',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      marginBottom: 16,
    },
    icon: {
      marginRight: 8,
    },
    inputText: {
      flex: 1,
      color: '#000',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
    },
    checkboxLabel: {
      color: '#fff',
      marginLeft: 8,
    },
    button: {
      backgroundColor: '#B3001B',
      paddingVertical: 14,
      borderRadius: 8,
      marginBottom: 16,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    link: {
      color: '#ccc',
      textAlign: 'center',
      marginBottom: 12,
    },
    footerText: {
      color: '#ccc',
      textAlign: 'center',
    },
    linkRed: {
      color: '#B3001B',
      fontWeight: 'bold',
    },
  });
  