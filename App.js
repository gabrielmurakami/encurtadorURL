import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Routes from "./pages/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Routes />
    </NavigationContainer>
  );
}
