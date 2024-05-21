import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="checkout/index"
        options={{ headerShown: true, title: "Transaction Details" }}
      />
      <Stack.Screen
        name="topup/index"
        options={{ headerShown: true, title: "Topup" }}
      />
      <Stack.Screen
        name="notifications/index"
        options={{ headerShown: true, title: "Notifications" }}
      />
      <Stack.Screen
        name="search/index"
        options={{ headerShown: true, title: "Search" }}
      />
      <Stack.Screen
        name="bookingsuccessfully/index"
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="map/index"
        options={{ headerShown: true, title: "Navigation" }}
      />
      <Stack.Screen
        name="addcardetails/index"
        options={{ headerShown: true, title: "Add new car" }}
      />
    </Stack>
  );
};

export default _layout;
