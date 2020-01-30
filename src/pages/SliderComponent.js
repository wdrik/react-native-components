import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

export default function SliderComponent() {
  return (
    <View style={styles.container}>
      <Text>
        Deprecated. Use{" "}
        <Text
          style={styles.link}
          onPress={() => {
            Linking.openURL(
              "https://github.com/react-native-community/react-native-slider"
            );
          }}
        >
          react-native-community/react-native-slider
        </Text>{" "}
        instead.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEBEB",
    padding: 20
  },

  link: {
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});
