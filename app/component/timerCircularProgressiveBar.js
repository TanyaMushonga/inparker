import { View, Text } from "react-native";
import React, { useState } from "react";

import CircularProgress from "react-native-circular-progress-indicator";

export default function TimerCircularProgressiveBar() {
  const [value, setValue] = useState(0);

  return (
    <View style={{ width: 200, height: 200 }}>
      <CircularProgress
        value={85}
        radius={90}
        textColor="green"
        fontSize={20}
        valueSuffix="%"
        inActiveStrokeColor="#f2f2f2"
        inActiveStrokeOpacity={0.3}
        inActiveStrokeWidth={6}
        duration={3000}
        onAnimationComplete={() => setValue(50)}
      />
      <CircularProgress
        value={value}
        radius={100}
        textColor="green"
        fontSize={20}
        valueSuffix="%"
        inActiveStrokeColor="tomato"
        inActiveStrokeOpacity={0.3}
        inActiveStrokeWidth={6}
        duration={4000}
       
      />
    </View>
  );
}
