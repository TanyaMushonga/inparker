import { View, Text } from "react-native";
import React from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";

const DashedLine = () => {
  return (
    <View
      style={{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderStyle: "dashed",
        marginVertical: widthPercentageToDP('4%'), // Add some margin to separate it from other components
      }}
    />
  );
};

export default DashedLine;
