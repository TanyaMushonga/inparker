import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Iconicons from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const index = () => {
  return (
    <ScrollView style={{ padding: wp("3%") }}>
      <Text
        style={{ fontWeight: "bold", fontSize: wp("6%"), textAlign: "center" }}
      >
        Settings
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp("5%"),
          marginTop: wp("3%"),
        }}
      >
        Account
      </Text>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp("4%"),
            marginTop: wp("3%"),
          }}
        >
          Change Password
        </Text>
        <Iconicons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp("5%"),
          marginTop: wp("7%"),
        }}
      >
        Profile
      </Text>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp("4%"),
            marginTop: wp("3%"),
          }}
        >
          Change profile picture
        </Text>
        <Iconicons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp("4%"),
            marginVertical: wp("5%"),
          }}
        >
          Change username
        </Text>
        <Iconicons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp("5%"),
          marginTop: wp("5%"),
        }}
      >
        Support
      </Text>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp("4%"),
            marginTop: wp("3%"),
          }}
        >
          Send Feedback
        </Text>
        <Iconicons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp("5%"),
          marginTop: wp("7%"),
        }}
      >
        Legal
      </Text>
      <Link href={""} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: wp("4%"),
              marginTop: wp("3%"),
            }}
          >
            Privacy policy
          </Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp("4%"),
            marginVertical: wp("5%"),
          }}
        >
          Terms and conditions
        </Text>
        <Iconicons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          gap: wp("2%"),
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
          borderRadius: wp("2%"),
          padding: wp("2%"),
        }}
        onPress={() => {
          router.push("/addcardetails");
        }}
      >
        <Ionicons name="add-circle" size={24} color="#fff" />
        <Text
          style={{
            fontSize: wp("4%"),

            color: "#fff",
          }}
        >
          Add car details
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default index;
