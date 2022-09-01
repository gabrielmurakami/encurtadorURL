import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CleanHistory = () => {
  return (
    <TouchableOpacity style={styles.botão} onPress={() => {}}>
      <View style={styles.container}>
        <Ionicons name="md-trash-outline" color={"#000"} size={28} />
        <Text style={{ fontSize: 14 }}>Clean All</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botão: {
    position: "absolute",
    top: "10%",
    right: "8%",
  },
  container: {
    alignItems: "center",
  },
});
