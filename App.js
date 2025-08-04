import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text style={[styles.espaçamento_texto, styles.titulo]}>{'Currículo do Aluno'}</Text>
      <Text style={[styles.espaçamento_texto, styles.descricao]}>Olá, me chamo Heitor Kenzo Mitsuuti
        e estou cursando o curso técnico do Senai de Desenvolvimento de Sistemas</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  espaçamento_texto: {
    marginTop: 50,
    marginLeft: 20,
  },

  titulo: {

  },

  descricao: {

  },
});
