import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export const GoBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.botão} onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        color={'#000'}
        size={28}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botão: {
    position: "absolute",
    top: '10%',
    left: '8%'
  },
});
