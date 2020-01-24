import React, { useState } from "react";
import { DatePickerIOS, View, StyleSheet, Button, Text } from "react-native";

export default function DatePickerIOSComponent() {
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showDatepicker, setShowDatepicker] = useState(false);

  return (
    <View style={styles.container}>
      {showDatepicker && (
        <DatePickerIOS
          date={chosenDate}
          onDateChange={newDate => setChosenDate(newDate)}
        />
      )}

      {showDatepicker && (
        <Button
          onPress={() => setShowDatepicker(false)}
          title="Hide date picker!"
        />
      )}

      {!showDatepicker && (
        <Button
          onPress={() => setShowDatepicker(true)}
          title="Show date picker!"
        />
      )}

      <Text style={styles.dataText}>{chosenDate.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },

  dataText: {
    textAlign: "center"
  }
});
