import React from "react";
import { View, Text } from "react-native";
import styles from './styles'

export default function Contacts({ navigation }) {
  return (
    <View style={styles.BodyContacts}>
      <Text> Ricardo Azevedo </Text>
      <Text> Telefone: (32) 99456-0975</Text>
      <Text
        onPress={() =>
          navigation.navigate("Informations", {
            Nome: "Ricardo Azevedo",
            Telefone: "(32) 99456-0975",
            Endereço: "Rua Getúlio Vargas",
            Número: "364",
            Profissão: "Enfermeiro",
            Email: "azevedoricardo@gmail.com",
          })
        }
      >
        Information...
      </Text>

      <View style={{ marginTop: 30 }}>
        <Text> Luana Rocha </Text>
        <Text> Telefone: (32) 99676-2975</Text>
        <Text
          onPress={() =>
            navigation.navigate("Informations", {
              Nome: "Vanessa",
              Telefone: "(21) 99072-7390",
              Endereço: "Rua das Neves",
              Número: "75",
              Profissão: "Engenheira",
              Email: "vanessa.eng@gmail.com",
            })
          }
        >
          Information...
        </Text>
      </View>
    </View>
  );
}
