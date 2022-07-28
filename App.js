import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App() {
  const [tex, setTex] = useState(0);
  const [texx, setTexx] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}> Previsao do tempo </Text>
        
        <TextInput
          style={styles.input}
          placeholder='Digite aqui sua cidade'
          keyboardType='text'
          value={tex}
          onChangeText={()=>axios.get(`https://api.hgbrasil.com/weather?key=203f1c51&${tex}`).then((response)=>setTexx(response.data))}
        />
        <TouchableOpacity
         style={styles.botao}
         //onPress={()=>axios.get('https://api.hgbrasil.com/weather?key=203f1c51').then((response)=>setValor(response.data.USDBRL))}
        >
        <Text style={styles.textoBotao}> Buscar </Text>
        </TouchableOpacity>
        
        <Text>{texx}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 30,
    alignSelf: 'center'
  },
  botao:{
    width: '50%',
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 6,
    backgroundColor: '#000',
    marginBottom: 10,
    textAlign: 'center'
  },
  textoBotao:{
    color: '#fff',
    fontSize: 30
  },
  input:{
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 6,
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10
  }
});