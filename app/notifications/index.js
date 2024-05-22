import { View, Text, ScrollView } from "react-native";
import React from "react";
import Notifications from "../component/notifications";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DashedLine from "../component/dashedLine";

export default function index() {
  return (
    <ScrollView>
      <View style={{ marginTop: wp("1%"), padding: wp("2%") }}>
        <Text
          style={{ fontWeight: "bold", color: "#545949", fontSize: wp("4%") }}
        >
          Today
        </Text>
        <DashedLine />
        <Notifications />
      </View>
    </ScrollView>
  );
}
