import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CleanHistory } from "../../components";

export default function LastGenerated() {
  const historic = [
    {
      id: 1,
      url: "https://link.com/link",
    },
    {
      id: 2,
      url: "https://link.com/link",
    },
    {
      id: 3,
      url: "https://link.com/link",
    },
    {
      id: 4,
      url: "https://link.com/link",
    },
    {
      id: 5,
      url: "https://link.com/link",
    },
    {
      id: 6,
      url: "https://link.com/link",
    },
  ];

  return (
    <View style={styles.container}>
      <CleanHistory />
      <Text style={styles.title}>Historic</Text>
      <FlatList
        style={styles.list}
        data={historic}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.text}>{item.url}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    position: "absolute",
    top: "10%",
    left: "10%",
  },

  list: {
    flex: 1,
    width: "100%",
    top: "25%",
    marginLeft: "20%",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    width: "100%",
  },
});
