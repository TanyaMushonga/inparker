import { View, Text } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Details = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: wp("4%"), color: "#7c8077" }}>
        {props.title1}
      </Text>
      <Text style={{ fontSize: wp("3.5%"), fontWeight: "bold" }}>
        {props.title2}
      </Text>
    </View>
  );
};

export default Details;
