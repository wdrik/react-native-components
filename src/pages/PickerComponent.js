import React, { useState } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

export default function PickerComponent() {
  const [language, setLanguage] = useState("reactjs");

  return (
    <View style={styles.container}>
      <Text>{language}</Text>

      <Picker
        selectedValue={language}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
      >
        <Picker.Item label="ReactJS" value="reactjs" />
        <Picker.Item label="React Native" value="react-native" />
        <Picker.Item label="VueJS" value="vuejs" />
        <Picker.Item label="NodeJS" value="nodejs" />
        <Picker.Item label="C#" value="c#" />
        <Picker.Item label="PHP" value="php" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEBEB",
    height: "100%",
    padding: 20
  },

  picker: {
    width: "100%"
  }
});
