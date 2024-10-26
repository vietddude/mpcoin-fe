import React from "react";
import { View, StyleSheet } from "react-native";
import SidebarHeader from "./header";
import MenuItem from "./item";
import UnifiedModeToggle from "./unifiedModeToggle";
import NetworkInfo from "./networkInfo";

const SidebarMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <SidebarHeader />
      <View style={styles.menuItems}>
        <MenuItem icon="wallet-outline" text="Wallet" isActive={true} />
        <MenuItem icon="people-outline" text="Contacts" />
        <MenuItem icon="layers-outline" text="Connected Sites" />
        <MenuItem icon="settings-outline" text="Settings" />
      </View>
      <View style={styles.footer}>
        <UnifiedModeToggle />
        <NetworkInfo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItems: {
    marginTop: 20,
  },
  footer: {
    marginTop: "auto",
    marginBottom: 30,
  },
});

export default SidebarMenu;
