import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "index") {
            iconName = "wallet-outline";
          } else if (route.name === "browser") {
            iconName = "planet-outline";
          } else {
            iconName = "help-outline";
          }

          return (
            <View style={[styles.iconContainer, focused && styles.focusedIcon]}>
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? "#4F8EF7" : "gray"}
              />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Wallet",
        }}
      />
      <Tabs.Screen
        name="browser"
        options={{
          title: "Browser",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.dark.background,
    borderTopWidth: 1,
    borderTopColor: "#333",
    height: 60,
    paddingBottom: 5,
  },
  tabBarItem: {
    padding: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  focusedIcon: {
    backgroundColor: "rgba(79, 142, 247, 0.1)", // Light blue background for active tab
    borderRadius: 20,
  },
});
