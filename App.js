import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Contacts from "./src/pages/Contacts";
import Informations from "./src/pages/Informations";
import AppContacts from "./src/pages/AppContacts";
import styles from "./src/pages/MainStyles";
import { View } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
   
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "#000000" },
    }}>
      <Tab.Screen name = "AppContacts" component = {AppContacts} options = {{ headerShown: false}} />
      <Tab.Screen name = "Contacts" component = {Contacts}/>
    </Tab.Navigator>
  )
}


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppContacts" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Informations" component={Informations}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
