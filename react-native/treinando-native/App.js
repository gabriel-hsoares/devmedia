import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Gabriel from './foto_perfil_gabriel.jpeg';
import Enrico from './foto_perfil_enrico.jpeg';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Brain Wave</Text>
      <View style={estilos.caixa}>
        <Text style={estilos.texto1}>Leader</Text>
        <Text style={estilos.texto2}>Enrico Souza</Text>
        <Image 
          source={Enrico}
          style={estilos.img}
        />
      </View>
      <View style={estilos.caixa}>
        <Text style={estilos.texto1}>MVP</Text>
        <Text style={estilos.texto2}>Gabriel Soares</Text>
        <Image 
          source={Gabriel}
          style={estilos.img}
        />
      </View>

      
      
    </View>
  );
}

const estilos = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2C0A6'
  },
  caixa: {
    marginTop: 35,
    width: 350,
    height: 200,
    backgroundColor: '#53736A',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#A8B545',
    justifyContent: 'center',
    padding: 40
  },
  texto1: {
    color: 'white',
    textAlign: 'justify',
    fontSize: 22
  },
  texto2:{
    color: '#C2C0A6'
  },
  titulo: {
    fontSize: 36,
    color: '#024554',
    fontWeight: 'bold',
    padding: 5,
    textTransform: 'uppercase',
  },
  img:{
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#A8B545',
    marginTop: 20
  }

});
