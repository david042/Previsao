import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Tempo(props){
    return(
        <>
            <Text style={styles.texto}> Min: {props.data.min}{"\n"}</Text>
            <Text style={styles.texto}> Max: {props.data.max}{"\n"}</Text>
            <Text style={styles.texto}> Descrição: {props.data.description}{"\n"}</Text>
        </>
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