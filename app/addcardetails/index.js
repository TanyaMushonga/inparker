import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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

  const handleInputChange = (name, value) => {
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleFormSubmit = () => {
    // Add code here to submit the form to the database
    console.log(carDetails);
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
        placeholder="National ID"
        leftIcon={
          <Icon name="id-card" type="font-awesome" size={24} color="green" />
        }
        value={carDetails.nationalId}
        onChangeText={(value) => handleInputChange(" Your National ID", value)}
      />
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
        onPress={() => {}}
      >
        <Ionicons name="add-circle" size={24} color="#fff" />
        <Text
          style={{
            fontSize: wp("4%"),

            color: "#fff",
          }}
        >
          Save
        </Text>
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
