import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DashedLine from "../component/dashedLine";
import Details from "../component/details";
import { router } from "expo-router";

export default function index() {
  const [duration, setDuration] = useState(1);
  const [totalAmount, setTotalAmount] = useState(1);

  const newAmount = useMemo(
    () => totalAmount * duration,
    [totalAmount, duration]
  );

  return (
    <ScrollView style={{ padding: wp("5%") }}>
      <View style={{ flexDirection: "row", gap: wp("5%") }}>
        <View>
          <FontAwesome6 name="square-parking" size={54} color="black" />
        </View>
        <View>
          <Text style={{ fontSize: wp("4%"), fontWeight: "bold" }}>CBD</Text>
          <Text style={{ fontSize: wp("3.5%"), fontWeight: "semibold" }}>
            Jason Moyo street
          </Text>
        </View>
      </View>
      <DashedLine />
      <View style={{ flexDirection: "colum", gap: hp("1.5%") }}>
        <Details title1="Booking Date" title2="12-05-2025" />
        <Details title1="Parking Number" title2="#P0123" />
      </View>
      <DashedLine />
      <View style={{ flexDirection: "colum", gap: hp("1.5%") }}>
        <Details title1="Arrived at" title2="10:00AM" />
        <Details title1="Exit before" title2="11:00AM" />
        <Details title1="Duration" title2={`${duration}/hr`} />
        <Details title1="Total Amount" title2={`$${newAmount}`} />
      </View>
      <DashedLine />
      <View
        style={{
          alignItems: "center",
          marginTop: hp("2%"),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: wp("2%"),
            borderRadius: wp("2%"),
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            setDuration(duration + 1);
          }}
        >
          <FontAwesome6 name="plus" size={20} color="white" />
          <Text style={{ color: "white", marginLeft: wp("2%") }}>
            Increase Duration
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: wp("2%"),
            borderRadius: wp("2%"),
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            if (duration > 1) {
              setDuration(duration - 1);
            }
          }}
        >
          <FontAwesome6 name="minus" size={20} color="white" />
          <Text style={{ color: "white", marginLeft: wp("2%") }}>
            Decrease Duration
          </Text>
        </TouchableOpacity>
      </View>
      <DashedLine />

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: wp("2%"),
          borderRadius: wp("2%"),
          flexDirection: "row",
          alignItems: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          router.push("/bookingsuccessfully");
        }}
      >
        <FontAwesome6 name="credit-card" size={20} color="white" />
        <Text style={{ color: "white", marginLeft: wp("2%") }}>
          Process Booking
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
