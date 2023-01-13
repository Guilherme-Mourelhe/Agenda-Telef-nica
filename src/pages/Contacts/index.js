import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import AddContact from "../AddContact";
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
              Profissão: "Engenheira",
              Email: "vanessa.eng@gmail.com",
            })
          }
        >
          Information...
        </Text>
      </View>

        <TouchableOpacity style={styles.AddInfo} onPress={ () => navigation.navigate("AddContact")}>
          <Text style={styles.AlignIcon}>
          <Ionicons name="add-circle-sharp" size={47} color="black"/>
          </Text>
          </TouchableOpacity>

    </View>
  );
}
