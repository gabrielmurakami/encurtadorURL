import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const TabNavigation = ({ state, descriptors, navigation }) => {
  const colors = {
    primary: "#000",
    secoundary: "#D7DBDD",
  };

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.containerBtn}>
      {state.routes.map((route, index, color) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}
            key={index}
          >
            {label === "Historic" ? (
              <MaterialIcons
                name={"history"}
                color={isFocused ? colors.primary : colors.secoundary}
                size={28}
              />
            ) : (
              <MaterialIcons
                name={label === "Home" ? "home" : label}
                color={isFocused ? colors.primary : colors.secoundary}
                size={28}
              />
            )}
            <Text
              style={{
                color: isFocused ? colors.primary : colors.secoundary,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    height: 70,
    padding: 15,
    position: "absolute",
    bottom: 25,
    borderRadius: 40,
    marginHorizontal: "7%",
    backgroundColor: "#FBFCFC",

    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 5,
        elevation: 1,
      },
      android: { elevation: 10 },
    }),
  },

  btn: {
    flex: 1,
    alignItems: "center",
  },
});
