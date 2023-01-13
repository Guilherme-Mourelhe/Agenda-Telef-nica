import React from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import styles from './style';
import { Ionicons } from "@expo/vector-icons";

export default function AddContact ( ){
    return(
        <View style={styles.BodyAddContact}>
            <Text style={styles.InfoText}> Nome: </Text>
            <TextInput style={styles.Input} placeholder="Nome do contato"/>

          
            <Text style={styles.InfoText}> Telefone: </Text>
            <TextInput style={styles.Input} placeholder="Nome do contato" keyboardType='numeric'/>
          
            <Text style={styles.InfoText}> Endereço: </Text>
            <TextInput style={styles.Input} placeholder="Nome do contato" keyboardType='numeric'/>


            <Text style={styles.InfoText}> Profissão: </Text>
            <TextInput style={styles.Input} placeholder="Nome do contato" keyboardType='numeric'/>

            <Text style={styles.InfoText}> Email: </Text>
            <TextInput style={styles.Input} placeholder="Nome do contato" keyboardType='numeric'/>

            <Ionicons style={{marginTop: 50}} name={"person-add-sharp"} size={50} color={"orange"}/>

        </View>
    )
}