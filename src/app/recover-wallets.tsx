import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import OTPVerificationScreen from "../components/auth/OTPVerificationScreen";

export default function RecoverWallets() {
  return (
    <SafeAreaView style={styles.container}>
      <OTPVerificationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
