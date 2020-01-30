import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
    </SafeAreaView>

    // <View style={styles.container}>
    //   <Text>Page content</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
