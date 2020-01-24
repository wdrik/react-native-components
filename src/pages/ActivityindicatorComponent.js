import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function ActivityindicatorComponent() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#e44134" />
      <ActivityIndicator size="small" color="#f4b704" />
      <ActivityIndicator size="large" color="#33a351" />
      <ActivityIndicator size="small" color="#4081ed" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },

  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
