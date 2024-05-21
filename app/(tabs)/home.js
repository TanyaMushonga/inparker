import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { router, Link } from "expo-router";
import Vehicles from "../component/vehicles";
import Icon from "react-native-vector-icons/FontAwesome";
import AvailableSpace from "../component/availableSpace";

export default function home() {
  return (
    <ScrollView
      style={{
        width: wp("100%"),
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          width: "100%",
          height: wp("75%"),
          padding: wp("4%"),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: wp("8%"),
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#8ae68a",
              padding: wp("2%"),
              borderRadius: wp("6%"),
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
              Good afternoon Tanya!
            </Text>
          </View>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              router.push("/notifications");
            }}
          >
            <View
              style={{
                backgroundColor: "#8ae68a",
                borderRadius: 50,
                width: 40,
                height: 40,
                marginRight: 10,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Ionicons name="notifications" size={24} color="black" />
              <View
                style={{
                  position: "absolute",
                  right: -6,
                  top: -3,
                  backgroundColor: "red",
                  borderRadius: 9,
                  width: 18,
                  height: 18,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 14 }}>3</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: wp("4%"),
          }}
        >
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 16, color: "#fff", marginTop: 10 }}>
              Your balance
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "bold",
              }}
            >
              $200.00
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                router.push("/topup");
              }}
            >
              <View
                style={{
                  backgroundColor: "#8ae68a",
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Ionicons
                  name="add"
                  size={30} // increase the size
                  color="#fff"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          top: wp("-25%"),

          height: wp("50%"),
          marginHorizontal: wp("2%"),
          borderRadius: wp("3%"),
          padding: wp("4%"),
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "black" }}>
            Park easy and Park safely
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Vehicles tittle="Car" icon="car" />
            <Vehicles tittle="Bike" icon="motorcycle" />
            <Vehicles tittle="Bus" icon="bus" />
            <Vehicles tittle="Truck" icon="truck" />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#DFF2BF",
                borderRadius: wp("6%"),
                padding: wp("2%"),
                marginTop: wp("4%"),
              }}
            >
              <TextInput
                style={{ flex: 1, backgroundColor: "transparent" }}
                placeholder="Search..."
                onPress={() => {
                  router.push("/search");
                }}
              />
              <Icon name="search" size={20} color="#000" />
            </View>
          </View>
        </View>
      </View>

      <View style={{ padding: wp("2%"), top: wp("-27%") }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "black",
                marginTop: wp("3%"),
                fontWeight: "bold",
                fontSize: wp("4%"),
              }}
            >
              Nearby Parkings
            </Text>
            <Text style={{ color: "#44594b", marginTop: wp("1%") }}>
              The best parking space near you
            </Text>
          </View>
          <Link href={""} style={{ fontWeight: "bold", color: "green" }}>
            See more
          </Link>
        </View>
        <AvailableSpace />
        <AvailableSpace />
    
      </View>
    </ScrollView>
  );
}
