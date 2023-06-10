import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Hello World</Text>
      <Text style={estilos.criador}>Criado por Gabriel Soares</Text>
      <Text style={estilos.descricao}>Isso que você está visualizando é apenas a minha evolução em React Native.</Text>
    </View>

  );
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 36,
    color: 'white'
  },
  criador: {
    color: 'white'
  },
  descricao: {
    width: 300,
    marginTop: 30,
    textAlign: 'justify',
    color: 'white'
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
