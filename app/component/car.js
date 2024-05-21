import { View, Text } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Car = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#ddedde",
        padding: wp("1%"),
        borderRadius: wp("3%"),
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
    </View>
  );
};

export default Car;
