import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function index() {
  const coordinates = [
    { latitude: -20.132507, longitude: 28.626373 },
    { latitude: -20.144543, longitude: 28.529023 },
    { latitude: -20.158489, longitude: 28.576155 },
    { latitude: -20.172435, longitude: 28.623287 },
    { latitude: -20.186381, longitude: 28.670419 },
    { latitude: -20.200327, longitude: 28.71755 },
    { latitude: -20.214273, longitude: 28.764682 },
    { latitude: -20.228219, longitude: 28.811814 },
    { latitude: -20.242165, longitude: 28.858946 },
    { latitude: -20.256111, longitude: 28.906078 },
  ];

  const handleMarkerPress = (coordinate) => {
    const url = `http://maps.google.com/maps?daddr=${coordinate.latitude},${coordinate.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -20.132507,
          longitude: 28.626373,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {coordinates.map((coordinate, index) => (
          <Marker
            key={index}
            coordinate={coordinate}
            pinColor="green"
            title={`Free Parking Space ${index + 1}`}
            description={`This is a free parking space number ${index + 1}.`}
            onPress={() => handleMarkerPress(coordinate)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
