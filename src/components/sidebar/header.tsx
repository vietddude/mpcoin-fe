import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SidebarHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://example.com/avatar.png" }}
        style={styles.avatar}
      />
      <View style={styles.addressContainer}>
        <Text style={styles.address}>0x38ae8......ab895</Text>
        <Ionicons name="chevron-down" size={24} color="white" />
      </View>
      <View style={styles.headerIcons}>
        <Ionicons
          name="paper-plane-outline"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Ionicons
          name="scan-outline"
          size={24}
          color="white"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  address: {
    color: "white",
    fontSize: 16,
    marginRight: 5,
  },
  headerIcons: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  icon: {
    marginLeft: 15,
  },
});

export default SidebarHeader;
