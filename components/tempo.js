import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Tempo(props){
    return(
      <>
        <Text style={styles.texto}>
          Tempo Agora para {props.data.city_name + "\n"}
          Temperatura: {props.data.temp + "\n"}
          Data da consulta: {props.data.date + "\n"}
          Hora da consulta: {props.data.time + "\n"}
          Descrição: {props.data.description + "\n"}
          Previsão para o resto do dia: {"\n"}
          Min: {props.data.forecast[0].min + "\n"} 
          Max: {props.data.forecast[0].max + "\n"}
          Descrição: {props.data.forecast[0].description + "\n"}
          Tempo amanhã: {"\n"}
          Min: {props.data.forecast[1].min + "\n"} 
          Max: {props.data.forecast[1].max + "\n"}
          Descrição: {props.data.forecast[1].description}
        </Text>
      </>
    );
}

const styles = StyleSheet.create({
  texto:{
    fontSize: 30,
    alignSelf: 'center'
  }
});