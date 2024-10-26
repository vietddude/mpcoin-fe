import React from "react";
import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { SessionProvider } from "@/src/context/ctx";

export default function Root() {
  return (
    <View style={styles.container}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
