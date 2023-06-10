import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Capa from './Capa.jpeg';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Serviam</Text>
      <Text>Vemos um cavaleiro ajoelhado perante Jesus Cristo.</Text>
      <Image 
        source= { Capa }
        style={estilos.img}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 36,
    textTransform: 'uppercase'
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 20
  }
});