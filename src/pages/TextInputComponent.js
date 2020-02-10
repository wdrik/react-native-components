import React, { useState } from "react";
import { TextInput, SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function TextInputComponent() {
  const [value, onChangeText] = useState("Placeholder");

  return (
    <SafeAreaView style={styles.container}>
      <Text>{value}</Text>

      <View style={styles.formRow}>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          allowFontScaling={true} // --> Bool / (default: true) / (Required: no)
          autoCapitalize="none" // --> enum('none', 'sentences', 'words', 'characters') / (default: none) / (Required: no)
          autoCompleteType="off" // --> enum('off', 'username', 'password', 'email', 'name', 'tel', 'street-address', 'postal-code', 'cc-number', 'cc-csc', 'cc-exp', 'cc-exp-month', 'cc-exp-year') / (Required: no)
          autoCorrect={true} // --> Bool / (default: true) / (Required: no)
          autoFocus={true} // --> Bool / (default: false) / (Required: no)
        />
      </View>
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

  formRow: {
    flexDirection: "row"
  },

  input: {
    flex: 1,
    height: 60,
    borderColor: "#CCC",
    borderRadius: 4,
    backgroundColor: "#FFF",
    color: "#777",
    borderWidth: 2,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 18
  }
});
