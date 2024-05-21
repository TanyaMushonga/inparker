import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";

const Session = () => {
  const [time, setTime] = useState(7200); // 2 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const terminateSession = () => {
    setTime(-1);
    Alert.alert(
      "Session Terminated",
      "You have terminated your parking session."
    );
  };

  const hours = Math.floor(Math.max(time, 0) / 3600);
  const minutes = Math.floor((Math.max(time, 0) % 3600) / 60);
  const seconds = Math.max(time, 0) % 60;

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "green",
          borderRadius: wp("4%"),
          padding: wp("2%"),
        }}
      >
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{hours.toString().padStart(2, "0")}</Text>
          <Text style={styles.label}>Hours</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{minutes.toString().padStart(2, "0")}</Text>
          <Text style={styles.label}>Minutes</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{seconds.toString().padStart(2, "0")}</Text>
          <Text style={styles.label}>Seconds</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={terminateSession}
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          gap: wp('2%'),
        }}
      >
        <Icon name="exit-outline" size={24} color="white" />
        <Text style={[styles.exitButton, { color: "white" }]}>
          Exit Session
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("5%"),
    justifyContent: "space-between",
    flexDirection: "column",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    marginRight: 5,
    color: "#fff",
  },
  label: {
    fontSize: wp("4%"),
    color: "#fff",
  },
});

export default Session;
