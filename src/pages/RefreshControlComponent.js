import React from "react";
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView
} from "react-native";
import Constants from "expo-constants";

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function RefreshControlComponent() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(6000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },

  scrollView: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "center"
  }
});
