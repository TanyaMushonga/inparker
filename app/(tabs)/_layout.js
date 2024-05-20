import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: hp("8%"),
        },
        tabBarItemStyle: {
          paddingBottom: widthPercentageToDP("2%"), // Add padding bottom here
        },
        tabBarLabelStyle: {
          fontSize: widthPercentageToDP("3.5%"), // Increase the font size here
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={hp("4%")} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="session"
        options={{
          tabBarLabel: "Session",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="clock-o" color={color} size={hp("4%")} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="history" color={color} size={hp("4%")} />
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={hp("4%")} />
          ),
        }}
      />
    </Tabs>
  );
}
