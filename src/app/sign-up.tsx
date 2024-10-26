import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SignupScreen from "@/src/components/auth/SignupScreen"; // Adjust the path as necessary

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <SignupScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
