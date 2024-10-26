import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TabBar: React.FC = () => (
  <View style={styles.tabContainer}>
    <TouchableOpacity style={styles.tabActive}>
      <Text style={styles.tabTextActive}>Tokens</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>DAOs</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>History</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabActive: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#4F8EF7",
  },
  tabText: {
    color: "gray",
    fontWeight: "bold",
  },
  tabTextActive: {
    fontWeight: "bold",
    color: "#4F8EF7",
  },
});

export default TabBar;
