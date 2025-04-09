import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1A2751',
      paddingVertical: 4,
      marginTop: 100,
      width: '95%',
      alignSelf: 'center',
      borderRadius: 65

    },
    scrollContainer: {
      paddingHorizontal: 16,
      flexDirection: 'row',
    },
    tab: {
      marginRight: 12,
      paddingHorizontal: 18,
      paddingVertical: 6,
      borderRadius: 20,
      backgroundColor: 'transparent',
    },
    activeTab: {
      backgroundColor: 'transparent', // destaque para aba ativa
    },
    tabText: {
      color: '#ccc',
      fontSize: 14,
    },
    activeTabText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  