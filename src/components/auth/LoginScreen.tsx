import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import Button from "./Button"; // Adjust the path as necessary

export default function LoginScreen() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.title}>MPCoin</Text>
        <Text style={styles.subtitle}>A Multi-Party Wallet for Web3</Text>
      </View>

      <View style={styles.bottomContent}>
        <View style={styles.middleContent}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
              style={styles.checkbox}
              color={isChecked ? "#4F6EF7" : undefined}
            />
            <Text style={styles.checkboxText}>
              I have read and agree to the{" "}
              <Text style={styles.link}>Terms of Use.</Text>
            </Text>
          </View>
        </View>

        <Button
          title="Create a wallet"
          onPress={() => router.push("/sign-up")}
          disabled={!isChecked}
          active={isChecked}
          type="primary"
        />
        <Button
          title="Recover wallets"
          onPress={() => router.push("/recover-wallets")}
          disabled={!isChecked}
          active={isChecked}
          type="secondary"
        />
        <Button
          title="Other options"
          onPress={() => console.log("Other options pressed")}
          disabled={!isChecked}
          active={isChecked}
          type="outline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  topContent: {
    alignItems: "center",
  },
  middleContent: {
    alignItems: "center",
  },
  bottomContent: {
    width: "100%",
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
    flexWrap: "wrap",
  },
  link: {
    color: "#4F6EF7",
    textDecorationLine: "underline",
  },
});
