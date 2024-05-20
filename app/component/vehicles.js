import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";
const Vehicles = (props) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: wp("2%"),
      }}
    >
      <View
        style={{
          backgroundColor: "#84e8a6",
          borderRadius: wp("5%"),
          padding: wp("2%"),
        }}
      >
        <FontAwesome5 name={props.icon} size={24} color="green" />
      </View>
      <Text style={{ fontSize: wp("3.5%"), color: "black" }}>
        {props.tittle}
      </Text>
    </TouchableOpacity>
  );
};

export default Vehicles;
