import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet
} from "react-native";

export default function ModalComponent() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade" //--> fade, slide, none
        transparent={false} //--> boolean
        visible={modalVisible}
        onRequestClose={() => Alert.alert("Modal has been closed.")}
      >
        <View style={styles.container}>
          <View>
            <TouchableHighlight
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.button}
            >
              <Text style={[styles.text, styles.textWhite]}>Hide Modal</Text>
            </TouchableHighlight>

            <Text style={styles.text}>Hello World!</Text>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => setModalVisible(true)}
        style={styles.button}
      >
        <Text style={[styles.text, styles.textWhite]}>Show Modal</Text>
      </TouchableHighlight>
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

  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },

  textWhite: {
    color: "#FFF"
  },

  button: {
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 4
  }
});
