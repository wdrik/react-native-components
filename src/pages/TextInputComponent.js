import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text } from "react-native";

export default function TextInputComponent() {
  const [value, onChangeText] = useState("Useless Placeholder");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Continuaaaar!</Text>

      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </SafeAreaView>
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

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});
