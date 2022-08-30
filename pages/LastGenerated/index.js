import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GoBack } from "../../components";

export default function LastGenerated() {
  return (
    <View style={styles.container}>
      <GoBack />
      <Text>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
