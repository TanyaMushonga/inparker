import { View, Text, ScrollView } from "react-native";
import React from "react";
import ParkHistory from "../component/parkHistory";

export default function history() {
  return (
    <ScrollView>
      <ParkHistory
        duration="12:00 - 13:00"
        address="123, main street"
        status="terminated"
        price="2"
      />
      <ParkHistory
        duration="12:00 - 13:00"
        address="123, main street"
        status="terminated"
        price="2"
      />
      <ParkHistory
        duration="12:00 - 13:00"
        address="123, main street"
        status="terminated"
        price="2"
      />
      <ParkHistory
        duration="12:00 - 13:00"
        address="123, main street"
        status="terminated"
        price="2"
      />
    </ScrollView>
  );
}
