import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LoginScreen } from "@/components/LoginScreen"; // Adjust the path as necessary

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
