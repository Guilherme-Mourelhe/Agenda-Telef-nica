import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Contacts({ navigation }) {
  return (
    <View style={styles.BodyContacts}>
      <Text style={styles.Space}> CONTATOS </Text>
      <Text style={styles.TextContact}> Ricardo Azevedo </Text>
      <Text style={styles.TextContact}> Telefone: (32) 99456-0975</Text>
      <Text style={styles.MoreInformation}
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
        <Text style={styles.TextContact}> Luana Rocha </Text>
        <Text style={styles.TextContact}> Telefone: (32) 99676-2975</Text>
        <Text style={styles.MoreInformation}
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

      <View style={{ marginTop: 30 }}>
        <Text style={styles.TextContact}> Lucas Guidine </Text>
        <Text style={styles.TextContact}> Telefone: (32) 95643-3281</Text>
        <Text style={styles.MoreInformation}
          onPress={() =>
            navigation.navigate("Informations", {
              Nome: "Lucas Guidine",
              Telefone: "(32) 95643-3281",
              Endereço: "Rua C",
              Número: "28",
              Profissão: "Desenvolvedor",
              Email: "lucasguidine.dev@gmail.com",
            })
          }
        >
          Information...
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.TextContact}> Felipe Gonçalves </Text>
        <Text style={styles.TextContact}> Telefone: (21) 97741-8219</Text>
        <Text style={styles.MoreInformation}
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

      <View style={{ marginTop: 30 }}>
        <Text style={styles.TextContact}> Henrique Alvarenga </Text>
        <Text style={styles.TextContact}> Telefone: (32) 95239-8117</Text>
        <Text style={styles.MoreInformation}
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
