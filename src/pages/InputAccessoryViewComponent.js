import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  InputAccessoryView,
  Button
} from "react-native";

export default function InputAccessoryViewComponent() {
  const [text, setText] = useState("Placeholder Text");

  return (
    <View>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          style={{
            padding: 10,
            paddingTop: 50
          }}
          inputAccessoryViewID={"uniqueID"}
          onChangeText={text => setText(text)}
          value={text}
        />
      </ScrollView>

      <InputAccessoryView nativeID={"uniqueID"}>
        <Button
          onPress={() => setText("Placeholder Text")}
          title="Reset Text"
        />
      </InputAccessoryView>
    </View>
  );
}
