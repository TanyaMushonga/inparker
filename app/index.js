import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const car1 = require("../assets/car1.png");
const car2 = require("../assets/car2.png");
import { router } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={car1} alt="car" style={styles.car1} />
      <Image source={car2} alt="car" style={styles.car2} />

      <Text style={styles.text}>Welcome to Park Smarter</Text>
      <Text style={styles.subheader}>
        Park Smarter is an app that gives you the convinient of finding free
        parking slots within the city and handles everything for your
      </Text>
      <View style={styles.btnview}>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>

        <Link style={styles.link} href="/signup">
          <Text style={{ color: "#3eb867" }}>Don't have account?</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    height: "100%",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  car1: {
    width: wp("50%"), // 50% of screen width
    height: hp("25%"), // 25% of screen height
    left: wp("32.5%"), // 32.5% of screen width
  },
  car2: {
    width: wp("50%"), // 50% of screen width
    height: hp("20%"), // 20% of screen height
    left: wp("5%"), // 5% of screen width
  },
  btnview: {
    marginTop: 20,
  },
  btn: {
    width: "100%",
    height: hp("6.5%"),
    backgroundColor: "blue",
    padding: wp("2%"),
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
  },
  subheader: {
    fontSize: 16,
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
});

export default index;
