import { View, Text } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";
export default function SmallDetailsCar(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FontAwesome5 name={props.icon} size={wp("4%")} color="#44594b" />
      <Text
        style={{
          color: "black",

          fontWeight: "bold",
          fontSize: wp("4%"),
        }}
      >
        {props.title1}
      </Text>
      <Text style={{ color: "#44594b" }}>{props.title2}</Text>
    </View>
  );
}
