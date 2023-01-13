import React from "react";
import { View, Text } from "react-native";
import styles from './styles'
export default function Information({ route }) {
  return (
    <View style={styles.BodyInformation}>
      <Text style={styles.TextInfo}>INFORMAÇÕES</Text>
      <Text style={styles.InfoText}> Nome: {route.params?.Nome} </Text>
      <Text style={styles.InfoText}> Telefone: {route.params?.Telefone} </Text>
      <Text style={styles.InfoText}> Endereço: {route.params?.Endereço} </Text>
      <Text style={styles.InfoText}> Profissão: {route.params?.Profissão} </Text>
      <Text style={styles.InfoText}> Email: {route.params?.Email} </Text>
    </View>
  );
}
