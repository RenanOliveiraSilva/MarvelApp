import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0c26',
    paddingTop: 40,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  content: {
    paddingHorizontal: 20,
    gap: 20,
  },
  card: {
    height: 180,
    justifyContent: 'flex-end',
    borderRadius: 16,
    overflow: 'hidden'

  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.83)',
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardAction: {
    color: '#E11D48',
    fontSize: 14,
    marginTop: 4,
  },
});
