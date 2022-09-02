import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CleanHistory } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LastGenerated() {
  const getData = async () => {
    try {
      const jsonresponse = await AsyncStorage.getItem("urlKey");
      jsonresponse != null ? JSON.parse(jsonresponse) : null;
      console.log({jsonresponse});
      return;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <CleanHistory />
      <Text style={styles.title}>Historic</Text>
      {/*       <FlatList
        style={styles.list}
        data={historic}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      /> */}
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
