import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";


export default function AppContacts() {
  return (
    <View style={styles.BodyPage}>
      <Text style={styles.NamePage}> COD </Text>
      <Text style={styles.NamePage}> CONTACTS </Text>
    <Image style={styles.ImageApp} source = {require('../../pages/assets/phonetalk.jpg')}/>  
    <Text style={styles.TextApp}> A melhor agenda telefônica do mercado</Text>
    <Text style={styles.TextApp2}> COMECE AGORA MESMO!</Text>
    <Image style={styles.ImageApp2} source={require('../assets/mobileP.png')}/>
    </View>
  );
}
