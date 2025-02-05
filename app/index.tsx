import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import {
  startLiveActivity,
  stopLiveActivity,
  isLiveActivityRunning,
} from "#modules/activity-controller";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF",
    color: "white",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});

export default function Index() {
  const [activityIsRunning, setActivityIsRunning] = useState(
    () => isLiveActivityRunning,
  );

  const handleStartLiveActivity = () => {
    startLiveActivity({
      customString: "Live Activity Testing",
      customNumber: 123,
    });
  };

  const handleStopLiveActivity = () => {
    stopLiveActivity();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Activity Testing app</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleStartLiveActivity}
        >
          <Text style={styles.buttonText}>Start Live Activity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleStopLiveActivity}
        >
          <Text style={styles.buttonText}>Stop Live Activity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
