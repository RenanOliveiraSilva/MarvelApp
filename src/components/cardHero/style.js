import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 250,
    borderWidth: 5,         // Espessura da borda
    borderColor: 'red',     // Cor da borda (vermelha)
    borderRadius: 10,
    marginBottom: 25,
    overflow: 'hidden',     // Garante que o conteúdo não vaze além das bordas
    backgroundColor: '#1c1b40',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', // Escurece a imagem
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  swirl: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 0,
    right: 0,
    opacity: 0.8, // Ajuste a opacidade se quiser mais discreto
  },
});
