import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Notifications = () => {
  return (
    <View
      style={{
        borderColor: "#545949",
        borderWidth: wp("0.4%"),
        width: "100%",

        borderRadius: wp("3%"),
      }}
    >
      <View
        style={{
          padding: wp("2%"),
          shadowColor: "#000",
          flexDirection: "row",
          gap: wp("2%"),
        }}
      >
        <Ionicons name="timer" size={44} color="black" />
        <View>
          <Text style={{ fontWeight: " bold", fontSize: wp("3%") }}>
            {new Date().toLocaleTimeString()}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: wp("4%") }}>
            Your session is expiring please renew
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: wp("4%"),
          justifyContent: "space-between",
          padding: wp("2%"),
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: wp("2%"),
            borderRadius: wp("2%"),
            alignItems: "center",
            marginTop: wp("2%"),
            width: wp("40%"),
          }}
          onPress={() => {
            router.push("/checkout");
          }}
        >
          <Text style={{ color: "#fff" }}>Renew</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: wp("2%"),
            borderRadius: wp("2%"),
            alignItems: "center",
            marginTop: wp("2%"),
            width: wp("40%"),
          }}
          onPress={() => {}}
        >
          <Text style={{ color: "#fff" }}>Terminate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;
