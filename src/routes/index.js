import React from "react";
import { StyleSheet } from "react-native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigation } from "../components";

import Home from "../pages/Home";
import Historic from "../pages/Historic";

const Stack = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator tabBar={(props) => <TabNavigation {...props} />}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Historic"
        component={Historic}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/* const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LastGenerated"
        component={LastGenerated}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
 */
