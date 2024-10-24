import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import CheckBox from "@react-native-community/checkbox";

export function LoginScreen() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet 3</Text>
      <Text style={styles.subtitle}>A Secure Wallet for Web3</Text>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxText}>
          I have read and agree to the{" "}
          <Text style={styles.link}>Terms of Use.</Text>
        </Text>
      </View>

      <Pressable
        style={[
          styles.button,
          { backgroundColor: isChecked ? "#4F6EF7" : "#2C2C2E" }, // Disable styling if checkbox isn't checked
        ]}
        onPress={() => {
          if (isChecked) console.log("Create a wallet pressed");
        }}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>Create a wallet</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => console.log("Recover wallets pressed")}
      >
        <Text style={styles.buttonText}>Recover wallets</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => console.log("Other options pressed")}
      >
        <Text style={styles.buttonText}>Other options</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: "#4F6EF7",
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#A0A0A0",
    marginBottom: 40,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    color: "#A0A0A0",
  },
  link: {
    color: "#4F6EF7",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#2C2C2E",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
