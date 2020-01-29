import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

export default function MaskedViewIOS() {
  return (
    <View style={styles.container}>
      <Text>
        Deprecated. Use{" "}
        <Text
          style={styles.link}
          onPress={() => {
            Linking.openURL(
              "https://github.com/react-native-community/react-native-masked-view"
            );
          }}
        >
          react-native-community/react-native-masked-view
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
    backgroundColor: "#CCC",
    padding: 20
  },

  link: {
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});
