import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0c26'
      
    },
    content: {
      flexDirection: 'row', 
      justifyContent: 'center', 
      padding: 15, 
      paddingHorizontal: 25, 
      flexWrap: 'wrap',
      columnGap: 35,
      marginTop: 20
    },
    card: {
      display: 'flex',
      height: 250,
      width: 160,
      backgroundColor: '#1c1b40',
      marginBottom: 25
    }
  });
  