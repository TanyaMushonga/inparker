import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function ParkHistory(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="car-outline" size={24} color="green" />
        <Text style={styles.carNumber}>ABC 1234</Text>
      </View>
      <Text style={styles.address}>{props.address}</Text>
      <Text style={styles.duration}>{props.duration}</Text>
      <Text style={styles.status}>Status: {props.status}</Text>
      <Text style={styles.price}>${props.price}</Text>
      <TouchableOpacity
        icon="check"
        mode="contained"
        onPress={() => console.log("Pressed")}
        color="green"
        style={{
          marginTop: wp("2%"),
          padding: wp("3%"),
          borderRadius: wp("4%"),
          backgroundColor: "green",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: wp("2%"),
        }}
      >
        <Icon name="checkmark-outline" size={24} color="#fff" />
        <Text style={{ color: "#fff" }}>Check Availability</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#b4deb7",
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  carNumber: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    marginTop: 10,
    color: "green",
  },
  duration: {
    marginTop: 10,
  },
  status: {
    marginTop: 10,
    color: "green",
  },
  price: {
    marginTop: 10,
    fontWeight: "bold",
  },
});
