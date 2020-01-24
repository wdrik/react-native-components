import React from "react";

import { Image, View, StyleSheet } from "react-native";

import instagram from "../assets/img/instagram.png";

export default function ImageComponent() {
  return (
    <View style={styles.container}>
      <Image source={instagram} />

      <Image
        source={{ uri: "https://placeimg.com/150/100/any" }}
        style={{ width: 150, height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
