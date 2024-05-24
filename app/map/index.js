import React, { useEffect, useState } from "react";
import { View, StyleSheet, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function index(route) {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (route.params?.lat && route.params?.lng) {
      setCoordinates({
        latitude: route.params.lat,
        longitude: route.params.lng,
      });
      console.log(`Latitude: ${route.params.lat}, Longitude: ${route.params.lng}`); // log the coordinates
    }
  }, [route.params]);

  const handleMarkerPress = (coordinate) => {
    const url = `http://maps.google.com/maps?daddr=${coordinate.latitude},${coordinate.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates ? coordinates.latitude : -20.132507,
          longitude: coordinates ? coordinates.longitude : 28.626373,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {coordinates && (
          <Marker
            coordinate={coordinates}
            onPress={() => handleMarkerPress(coordinates)}
            pinColor="red"
          />
        )}
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
