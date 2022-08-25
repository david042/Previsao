import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/tempo';
import Api from './components/api';

export default function App() {
  const [dados, setDados] = useState("");
  const [cidade, setCidade] = useState("Mongaguá");

  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=2&fields=only_results,city_name,temp,date,time,description,forecast,min,max&key=2cf6d53f&city_name=${cidade}`)
    setDados(response.data); 
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}> Previsao do tempo </Text>
        
        <TextInput
          style={styles.input}
          placeholder='Digite aqui sua cidade'
          keyboardType='default'
          onChangeText={(value)=>setCidade(value)}
        />
        <TouchableOpacity
         style={styles.botao}
         onPress={carregaDados}
        >
        <Text style={styles.textoBotao}> Buscar </Text>
        </TouchableOpacity>
        <Text>
          <Tempo data={dados}/>
        </Text>
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