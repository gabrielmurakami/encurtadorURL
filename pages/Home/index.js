import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
//import Clipboard from "@react-native-clipboard/clipboard";
import * as Clipboard from "expo-clipboard";

export default function Home() {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [urlFinal, setUrlFinal] = useState("");
  const key = "b7bfe323a38189b457655f2d4ec31cd0";

  const short = async () => {
    Keyboard.dismiss();
    if (url.includes("https://") || url.includes("http://")) {
      await fetch(
        `https://cutt.ly/api/api.php?key=${key}&short=${url}&name=${name}`
      ).then(async (response) => {
        const data = await response.json();
        if (data.url.status === 3) {
          alert("Esse link já está em uso.");
          return;
        }
        if (data.url.status === 2) {
          alert("Url é inválida.");
          return;
        }

        setUrlFinal(data.url.shortLink);
        setUrl("");
        setName("");
      });

      return;
    }

    alert("URL invalid");
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(urlFinal);
    alert("URL copiada");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>
            url
            <Text style={{ color: "#1076f7" }}>Shortener</Text>
          </Text>
          <TextInput
            style={styles.urlInput}
            autoCapitalize="none"
            keyboardType="url"
            onChangeText={(text) => setUrl(text)}
            value={url}
            placeholder="Digite a url..."
          />
          <TextInput
            style={styles.urlInput}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Nome personalizado"
          />
          <TouchableOpacity style={styles.shortBtn} onPress={() => short()}>
            <Text style={{ color: "#fff" }}>Encurtar</Text>
          </TouchableOpacity>
          {urlFinal === "" ? (
            <TouchableWithoutFeedback
              onPress={urlFinal ? copyToClipboard : () => {}}
            >
              <Text style={styles.finalUrl}>{urlFinal}</Text>
            </TouchableWithoutFeedback>
          ) : (
            ""
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#21243d",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
  },

  urlInput: {
    height: 50,
    width: "80%",
    borderColor: "#21243d",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fafafa",
    marginBottom: 20,
    fontSize: 20,
  },

  shortBtn: {
    backgroundColor: "#ff7c7c",
    borderRadius: 20,
    height: 40,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  finalUrl: {
    height: 40,
    width: "80%",
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
