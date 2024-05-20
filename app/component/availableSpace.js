import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Car from "./car";
import SmallDetailsCar from "./smallDetailsCar";
const view = require("./../../assets/view.jpg");
import { router } from "expo-router";

const AvailableSpace = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/checkout");
      }}
      style={{
        marginTop: wp("4%"),
        width: "100%",
        backgroundColor: "#f2f7f4",
        borderRadius: wp("3%"),
        padding: wp("2%"),
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View style={{ flexDirection: "row", gap: wp("2%") }}>
        <View style={{ padding: wp("1%") }}>
          <Image
            source={view}
            style={{
              width: wp("19%"),
              height: wp("20%"),
              borderRadius: wp("2%"),
            }}
          />
        </View>
        <View>
          <View
            style={{ padding: wp("1%"), flexDirection: "row", gap: wp("2%") }}
          >
            <Car title="Car" />
            <Car title="Bus" />
            <Car title="Truck" />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "black",

                fontWeight: "bold",
                fontSize: wp("4%"),
              }}
            >
              CBD
            </Text>
            <Text style={{ color: "#44594b" }}>
              corner Fife str and 8th avenue{" "}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#44594b",
          marginVertical: 10,
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <SmallDetailsCar icon="dollar-sign" title1="1.5" title2="/hr" />
        <SmallDetailsCar icon="clock" title1="4" title2="minutes" />
        <SmallDetailsCar icon="car" title1="15" title2="available" />
      </View>
    </TouchableOpacity>
  );
};

export default AvailableSpace;
