import React, { useState } from "react";
import { DatePickerIOS, View, StyleSheet } from "react-native";

export default function DatePickerIOSComponent() {
  const [chosenDate, setChosenDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <DatePickerIOS
        date={chosenDate}
        onDateChange={newDate => setChosenDate(newDate)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
