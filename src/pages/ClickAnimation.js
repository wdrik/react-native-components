import React, { useState } from "react";
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function ClickAnimation() {
  const [w, setW] = useState(100);
  const [h, setH] = useState(100);

  function leaveBiggerSquare() {
    // Animate the update
    LayoutAnimation.spring();

    setW(w + 15);
    setH(h + 15);
  }

  function leaveSmallerSquare() {
    // Animate the update
    LayoutAnimation.spring();

    if (w >= 30 && h >= 30) {
      setW(w - 15);
      setH(h - 15);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={leaveBiggerSquare}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.box, { width: w, height: h }]} />

      <TouchableOpacity onPress={leaveSmallerSquare}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  box: {
    width: 150,
    height: 150,
    backgroundColor: "#444"
  },

  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 15
  },

  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
