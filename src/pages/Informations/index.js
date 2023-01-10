import React from "react";
import { View, Text } from "react-native";
import styles from './styles'
export default function Information({ route }) {
  return (
    <View style={styles.BodyInformation}>
      <Text> Nome: {route.params?.Nome} </Text>
      <Text> Telefone: {route.params?.Telefone} </Text>
      <Text> Endereço: {route.params?.Endereço} </Text>
      <Text> n°: {route.params?.Número}</Text>
      <Text> Profissão: {route.params?.Profissão} </Text>
      <Text> Email: {route.params?.Email} </Text>
    </View>
  );
}
