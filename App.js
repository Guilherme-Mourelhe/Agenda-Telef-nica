import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "./src/pages/Contacts";
import Informations from "./src/pages/Informations";
import AppContacts from "./src/pages/AppContacts";
import styles from "./src/pages/MainStyles";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#000000" },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="AppContacts"
        component={AppContacts}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={24} color="orange" />;
            }

            return <Ionicons name="home-outline" size={24} color="orange" />;
          },
        }}
      />

      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Entypo name="old-phone" size={24} color="orange" />;
            }
            return <AntDesign name="phone" size={24} color="orange" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppContacts"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Informations" component={Informations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
