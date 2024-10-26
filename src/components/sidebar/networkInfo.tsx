import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NetworkInfo: React.FC = () => {
  return (
    <View style={styles.network}>
      <View style={styles.networkDot} />
      <Text style={styles.networkText}>Network</Text>
      <Text style={styles.ethereumText}>Ethereum</Text>
      <Ionicons name="chevron-forward" size={24} color="#4F8EF7" />
    </View>
  );
};

const styles = StyleSheet.create({
  network: {
    flexDirection: "row",
    alignItems: "center",
  },
  networkDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 10,
  },
  networkText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
  ethereumText: {
    color: "#4F8EF7",
    fontSize: 16,
    marginRight: 5,
  },
});

export default NetworkInfo;
