import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Input, Icon } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";

export default function index() {
  const [carDetails, setCarDetails] = useState({
    regNumber: "",
    color: "",
    nationalId: "",
    carType: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name, value) => {
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleFormSubmit = async () => {
    // Validation
    if (!carDetails.color || !carDetails.nationalId || !carDetails.carType) {
      Alert.alert("Submission failed", "All fields are required");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(
        "http://inpark-api-331214075983.herokuapp.com/create-vehicle/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(carDetails),
        }
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      // Handle successful submission here, e.g. show a success message
    } catch (error) {
      Alert.alert("Submission failed", error.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#84e8a6",
          width: wp("50%"),
          height: wp("50%"),
          borderRadius: wp("25%"),
          padding: wp("2%"),
          marginVertical: wp("5%"),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name={"car"} size={154} color="green" />
      </View>

      <Input
        placeholder="Car Registration Number"
        leftIcon={
          <MaterialIcons name="confirmation-number" size={24} color="green" />
        }
        value={carDetails.regNumber}
        onChangeText={(value) => handleInputChange("regNumber", value)}
      />
      <Input
        placeholder="Color"
        leftIcon={<Icon name="palette" size={24} color="green" />}
        value={carDetails.color}
        onChangeText={(value) => handleInputChange("color", value)}
      />

      <View style={styles.pickerContainer}>
        <Ionicons name="arrow-down" size={24} color="black" />
        <Picker
          selectedValue={carDetails.carType}
          style={styles.picker}
          onValueChange={(value) => handleInputChange("carType", value)}
        >
          <Picker.Item label="Truck" value="truck" />
          <Picker.Item label="Bus" value="bus" />
          <Picker.Item label="Bike" value="bike" />
          <Picker.Item label="Car" value="car" />
        </Picker>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          gap: wp("2%"),
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
          borderRadius: wp("2%"),
          padding: wp("2%"),
          width: wp("90%"),
        }}
        onPress={() => {
          handleFormSubmit();
        }}
        disabled={loading}
      >
        <Ionicons name="add-circle" size={24} color="#fff" />
        {loading ? (
          <Text
            style={{
              fontSize: wp("4%"),

              color: "#fff",
            }}
          >
            Saving...
          </Text>
        ) : (
          <Text
            style={{
              fontSize: wp("4%"),

              color: "#fff",
            }}
          >
            Saved
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: wp("5%"),
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#748a76",
    borderBottomWidth: 1,

    marginBottom: wp("5%"),
  },
  picker: {
    flex: 1,
  },
});
